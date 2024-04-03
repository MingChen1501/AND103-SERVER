const Product = require('../model/Product');

const ProductRepository = {
  async createProduct(product) {
    return await Product.create(product);
  },
  async getProducts() {
    return await Product.find();
  },
  async getProductById(id) {
    return await Product.findById(id);
  },
  async updateProduct(id, product) {
    return await Product.findByIdAndUpdate(id, product, { new: true });
  },
  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  }
}
module.exports = ProductRepository;