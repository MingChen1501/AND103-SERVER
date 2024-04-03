const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  customerId: {
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
    }
  }]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
