const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  shippingAddress: [{
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    ward: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    ZIPCODE: {
      type: String,
      required: true
    }
  }]
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
