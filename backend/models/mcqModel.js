const pool = require("../db");

const getMcq = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM mcqs", (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = { getMcq };
