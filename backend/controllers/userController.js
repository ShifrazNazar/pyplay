const userModel = require("../models/userModel");

const getProfile = (req, res) => {
  const userId = req.user.id; // Extracted from the middleware

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

module.exports = {
  getProfile,
};
