const db = require("../db");

// Function to find a user by email
const findUserByEmail = (email, callback) => {
  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], callback);
};

// Function to find a user by ID
const findUserById = (userId, callback) => {
  const query = "SELECT * FROM users WHERE id = ?";
  db.query(query, [userId], callback);
};

// Function to create a new user
const createUser = (username, email, hashedPassword, callback) => {
  const query =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
  db.query(query, [username, email, hashedPassword], callback);
};

// Function to update a user's username
const updateUsername = (userId, newUsername, callback) => {
  const query = "UPDATE users SET username = ? WHERE id = ?";
  db.query(query, [newUsername, userId], callback);
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  updateUsername,
};
