const quizModel = require("../models/quizModel");

const submitQuiz = (req, res) => {
  const { userId, score } = req.body;

  if (!userId || !score) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  quizModel.createQuiz(userId, score, (err, result) => {
    if (err) {
      console.error("Error inserting quiz:", err);
      return res.status(500).json({ message: "Server error" });
    }
    res.status(201).json({ message: "Quiz submitted successfully" });
  });
};

const getUserScoresController = (req, res) => {
  quizModel.getUserScores((err, userScores) => {
    if (err) {
      console.error("Error retrieving user scores:", err);
      return res
        .status(500)
        .json({ error: "An error occurred while retrieving data." });
    }
    res.status(200).json(userScores);
  });
};

module.exports = {
  submitQuiz,
  getUserScoresController,
};
