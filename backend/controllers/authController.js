const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');


// Registration Controller
const register = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
  
    try {
      // Check if the email already exists
      userModel.findUserByEmail(email, async (err, results) => {
        if (err) {
          console.error('Error querying user:', err);
          return res.status(500).json({ message: 'Error checking user email.' });
        }
  
        if (results.length > 0) {
          return res.status(409).json({ message: 'Email already in use.' });
        }
  
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Insert user into the database
        userModel.createUser(email, hashedPassword, (err, results) => {
          if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ message: 'Error registering user.' });
          }
          res.status(201).json({ message: 'User registered successfully!' });
        });
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error.' });
    }
  };
  
  

  const login = (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required.' });
    }
  
    userModel.findUserByEmail(email, async (err, results) => {
      if (err) {
        console.error('Error querying user:', err);
        return res.status(500).json({ message: 'Error logging in.' });
      }
  
      if (results.length === 0) {
        return res.status(400).json({ success: false, message: 'Invalid email or password.' });
      }
  
      const user = results[0];
  
      // Compare the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return res.status(200).json({ success: true, message: 'Login successful!' });
      } else {
        return res.status(400).json({ success: false, message: 'Invalid email or password.' });
      }
    });
  };

module.exports = {
    register,
    login,
  };