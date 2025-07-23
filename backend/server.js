const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const branchRoutes = require("./routes/branchRoutes");
const transportRoutes = require("./routes/transportRoutes");

dotenv.config();

const app = express();

// 🔐 CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
app.use(express.json());

// 🌐 Routes
app.use("/api/auth", authRoutes); // ✅ Register & Login
app.use("/api/branches", branchRoutes);
app.use("/api/transport", transportRoutes);

// 📊 Public test endpoint (optional)
app.get("/", (req, res) => {
  res.send("🚀 MBTS API is running");
});

// ✅ Server Start
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
