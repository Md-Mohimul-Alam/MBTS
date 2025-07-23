const pool = require("../models/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { email, password, name, role } = req.body;

  try {
    const hashed = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (email, password, name, role) VALUES ($1, $2, $3, $4) RETURNING id, email, name, role",
      [email, hashed, name, role]
    );
    res.status(201).json({ message: "User registered", user: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Registration failed" });
  }
};

exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND role = $2", [email, role]);
    const user = result.rows[0];
    if (!user) return res.status(401).json({ message: "Invalid credentials or role mismatch" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      token,
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Login failed" });
  }
};
