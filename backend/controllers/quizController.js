const quizModel = require("../models/quizModel");

exports.submitQuiz = async (req, res) => {
  try {
    const { userId, score } = req.body;

    if (!userId || !score) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await quizModel.create(userId, score);
    res.status(201).json({ message: "Quiz submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
