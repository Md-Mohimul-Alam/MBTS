// backend/routes/branchRoutes.js
const express = require("express");
const router = express.Router();
const branchController = require("../controllers/branchController");
const { authenticate, authorizeRoles } = require("../middlewares/auth");

// Protect all routes below with token authentication
router.use(authenticate);

// POST /api/branches - Create a branch (Admin only)
router.post("/", authorizeRoles("admin-dashboard"), branchController.createBranch);

// GET /api/branches - List all branches (Admin or Manager)
router.get("/", authorizeRoles("admin-dashboard", "manager-dashboard"), branchController.getBranches);

// GET /api/branches/:id - View branch by ID
router.get("/:id", authorizeRoles("admin-dashboard", "manager-dashboard"), branchController.getBranchById);

// PUT /api/branches/:id - Update branch (Admin only)
router.put("/:id", authorizeRoles("admin-dashboard"), branchController.updateBranch);

// DELETE /api/branches/:id - Delete branch (Admin only)
router.delete("/:id", authorizeRoles("admin-dashboard"), branchController.deleteBranch);

module.exports = router;
