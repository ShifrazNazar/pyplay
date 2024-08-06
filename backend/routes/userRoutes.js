const express = require("express");
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected route example: Profile
router.get("/profile", authenticateToken, userController.getProfile);

module.exports = router;
