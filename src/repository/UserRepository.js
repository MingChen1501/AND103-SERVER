const User = require('../model/User');

const UserRepository = {
  async create(user) {
    return await User.create(user);
  },
  async findByEmail(email) {
    return await User.findOne({ email });
  },
  async findById(id) {
    return await User.findById(id);
  },
  async update(id, user) {
    return await User.findByIdAndUpdate(id, user);
  },
  async delete(id) {
    return await User.findByIdAndDelete(id);
  },
  async findAll() {
    return await User.find();
  }
}

module.exports = UserRepository;