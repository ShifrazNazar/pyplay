const db = require("../db");

class quizSubmissionModel {
  static create(userId, score) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO quiz_submissions (user_id, score) VALUES (?, ?)`;
      db.query(query, [userId, score], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = quizSubmissionModel;
