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
    const result = await Product.findByIdAndUpdate(id, product, { new: true });
    console.log(result);
    return result;
  },
  async deleteProduct(id) {
    return await Product.findByIdAndDelete(id);
  },
  async getProductByDetailId(detailId) {
    return await Product.findOne({ 'details._id': detailId });
  },
  async getProductByIdAndProductDetailId(productId, detailId) {
    const product = await Product.findOne({
      _id: productId,
      'details._id': detailId,
    });
    const detail = product.details.find((detail) => detail._id == detailId);
    return product
  }
}
module.exports = ProductRepository;