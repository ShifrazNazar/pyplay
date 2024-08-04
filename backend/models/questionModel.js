const pool = require('../db');

const getQuestions = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM questions', (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { getQuestions };
