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
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Category",
    required: false,
    default: []
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
    default: [],
  },
  images: {
    type: [String],
    required: false,
    default: []
  },
});

module.exports = mongoose.model("Product", productSchema);
