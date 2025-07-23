const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

// Dummy user DB
const users = [
  { id: 1, username: "admin", password: "pass123", role: "admin" },
  { id: 2, username: "user", password: "pass123", role: "user" }
];

// Auth middleware
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// ✅ RBAC Middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: Role not allowed" });
    }
    next();
  };
};

// Login Route (returns JWT)
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
});

// 🔐 Protected Route (admin only)
app.get(
  "/admin/data",
  authenticate,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ secret: "This is admin-only data." });
  }
);

// ✅ General Protected Route (user or admin)
app.get(
  "/user/profile",
  authenticate,
  authorizeRoles("admin", "user"),
  (req, res) => {
    res.json({ message: "Hello " + req.user.role + "!" });
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
