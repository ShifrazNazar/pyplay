const db = require("../db");

// Function to find a user by email
const findUserByEmail = (email, callback) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], callback);
};

// Function to create a new user
const createUser = (username, email, hashedPassword, callback) => {
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, hashedPassword], callback);
};

module.exports = {
  findUserByEmail,
  createUser,
};
