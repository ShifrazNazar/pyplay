const mcqModel = require('../models/mcqModel');

const getMcq = async (req, res) => {
  try {
    const questions = await mcqModel.getMcq();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

module.exports = { getMcq };
