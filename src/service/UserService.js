const User = require('../model/User.js');
const UserRepository = require('../repository/UserRepository.js');
const UserService = {
  async getUserById(userId) {
    try {
      const user = await UserRepository.findById(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to get user');
    }
  },
  async createUser(userData) {
    try {
      const user = await UserRepository.create(userData);
      return user;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  },
  async updateUser(userId, userData, isPatch = true) {
    try {
      const user = await UserRepository.update(userId, userData, isPatch);
      return user;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  },
  async deleteUser(userId) {
    try {
      const user = await UserRepository.delete(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to delete user');
    }
  },
  async getUsers() {
    try {
      const users = await UserRepository.findAll();
      return users;
    } catch (error) {
      throw new Error('Failed to get users');
    }
  },
}
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
const register = async (username, password, phoneNumber, email ) => {
  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('Username already taken');
    }

    // Create a new user object
    const newUser = new User({ username, password, phoneNumber, email  });

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
  UserService,
  login,
  register,
};