const questionModel = require('../models/questionModel');

const getQuestions = async (req, res) => {
  try {
    const questions = await questionModel.getQuestions();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

module.exports = { getQuestions };
