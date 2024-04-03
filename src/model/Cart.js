const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  items: [{
    quantity: {
      type: Number,
      required: true
    },
    productDetailId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductDetail',
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
