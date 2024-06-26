const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model defined
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  orderDetails: [{
    productDetailId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
  }],
  orderStatus: {
    type: String,
    enum: ['PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'], // Assuming order status values
    default: 'PROCESSING'
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Credit Card', 'PayPal', 'Other'], // Assuming payment method options
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['PAID', 'UNPAID'], // Assuming payment status options
    default: 'UNPAID'
  },
  totalAmount: {
    type: Number,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
