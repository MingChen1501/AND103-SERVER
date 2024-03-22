const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
    default: null,
  },
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: false,
  },
  details: {
    type: [
      {
        color: {
          type: String,
          required: false,
          default: null,
  
        },
        size: {
          type: String,
          required: false,
          default: null,
        },
        stock: {
          type: Number,
          required: false,
          default: 0,
        },
        price: {
          type: Number,
          required: false,
          default: 0,
        },
      },
    ],
    required: false,
    default: [
      {
        color: null,
        size: null,
        stock: 0,
        price: 0,
      },
    ],
  },
  images: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
