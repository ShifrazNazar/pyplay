const db = require("../db");

// Function to create a new quiz entry
const createQuiz = (userId, score, callback) => {
  const query = `INSERT INTO quizzes (user_id, score) VALUES (?, ?)`;
  db.query(query, [userId, score], (err, result) => {
    if (err) {
      return callback(err);
    }
    callback(null, result);
  });
};

// Function to retrieve user scores
const getUserScores = (callback) => {
  const query = `
    SELECT users.username, quizzes.score
    FROM users
    JOIN quizzes ON users.id = quizzes.user_id;
  `;
  db.query(query, (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

module.exports = {
  createQuiz,
  getUserScores,
};
