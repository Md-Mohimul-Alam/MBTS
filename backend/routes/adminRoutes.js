// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const { authenticate, authorizeRoles } = require("../middlewares/auth");

router.get(
  "/admin/dashboard",
  authenticate,
  authorizeRoles("admin-dashboard"),
  (req, res) => {
    res.json({ message: "Welcome, Admin!", user: req.user });
  }
);

module.exports = router;
