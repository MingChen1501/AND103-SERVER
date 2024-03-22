const Product = require('../model/Product.js');

const productService = {
  async getProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error('Failed to get products');
    }
  },

  async createProduct(productData) {
    try {
      const product = await Product.create(productData);
      return product;
    } catch (error) {
      console.log(error);
      throw new Error('Failed to create product');
    }
  },

  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Failed to get product');
    }
  },

  async updateProduct(productId, productData, isPatch = true) {
    try {
      const product = await Product.findByIdAndUpdate(productId, productData, {
        new: isPatch,
      });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Failed to update product');
    }
  },

  async deleteProduct(productId) {
    try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw new Error('Failed to delete product');
    }
  },
};

module.exports = productService;
