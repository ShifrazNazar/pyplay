const db = require("../db");

class quizModel {
  static create(userId, score) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO quiz (user_id, score) VALUES (?, ?)`;
      db.query(query, [userId, score], (err, result) => {
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }
}

module.exports = quizModel;
