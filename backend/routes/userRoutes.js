const express = require("express");
const userController = require("../controllers/userController");
const { authenticateToken } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/profile", authenticateToken, userController.getProfile);

module.exports = router;
