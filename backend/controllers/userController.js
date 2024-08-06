const userModel = require("../models/userModel");

const getProfile = (req, res) => {
  const userId = req.user.id;

  userModel.findUserById(userId, (err, results) => {
    if (err) {
      console.error("Error fetching user profile:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = results[0];
    res.status(200).json(user);
  });
};

const updateUsername = (req, res) => {
  const userId = req.user.id;
  const { newUsername } = req.body;

  if (!newUsername) {
    return res.status(400).json({ message: "New username is required" });
  }

  userModel.updateUsername(userId, newUsername, (err, results) => {
    if (err) {
      console.error("Error updating username:", err);
      return res.status(500).json({ message: "Server error" });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Username updated successfully" });
  });
};

module.exports = {
  getProfile,
  updateUsername,
};
