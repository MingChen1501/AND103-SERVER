const express = require('express');
const UserService = require('../../service/UserService.js');

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    await UserService.login(username, password);
    // Handle successful login
    res.status(200).json({ message: 'Login successful'});
  } catch (error) {
    // Handle login error
    res.status(400).json({ message: 'Login failed', error: error.message });
  }
});
// Register route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    await UserService.register(username, password);
    // Handle successful registration
    res.status(200).json({ message: 'Registration successful'});
  } catch (error) {
    // Handle registration error
    res.status(400).json({ message: 'Registration failed', error: error.message });
  }
});
module.exports = router;