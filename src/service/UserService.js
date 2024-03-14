const User = require('../model/User.js');

// Import the User model

// Define the login method
const login = async (username, password) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the password is correct
    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    // Return the user object
    return user;
  } catch (error) {
    // Handle any errors
    throw new Error(`Login failed: ${error.message}`);
  }
};
// Define the register method
const register = async (username, password) => {
  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('Username already taken');
    }

    // Create a new user object
    const newUser = new User({ username, password });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Return the saved user object
    return savedUser;
  } catch (error) {
    // Handle any errors
    throw new Error(`Registration failed: ${error.message}`);
  }
};

// Export the register method
module.exports = {
  login,
  register,
};