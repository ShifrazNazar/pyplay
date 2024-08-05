const express = require("express");
const router = express.Router();
const {
  submitQuiz,
  getUserScoresController,
} = require("../controllers/quizController");

// Route for submitting a quiz
router.post("/submit", submitQuiz);

// Route for retrieving user scores
router.get("/user-scores", getUserScoresController);

module.exports = router;
