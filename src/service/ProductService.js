const ProductRepository = require("../repository/ProductRepository.js");
const CategoryService = require("./CategoryService.js");

const productService = {
  async getProducts() {
    try {
      const products = await ProductRepository.getProducts();
      return products;
    } catch (error) {
      throw new Error("Failed to get products");
    }
  },
  async getProductById(productId) {
    try {
      const product = await ProductRepository.getProductById(productId);
      return product;
    } catch (error) {
      throw new Error("Failed to get product");
    }
  },
  async createProduct(productData) {
    try {
      const product = await ProductRepository.createProduct(productData);
      return product;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  },
  async updateProduct(productId, productData, isPatch = true) {
    try {
      const product = await ProductRepository.updateProduct(
        productId,
        productData,
        isPatch
      );
      return product;
    } catch (error) {
      throw new Error("Failed to update product");
    }
  },
  async deleteProduct(productId) {
    try {
      const product = await ProductRepository.deleteProduct(productId);
      return product;
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  },
  async getProductsByCategoryId(categoryId) {
    try {
      const products = await ProductRepository.getProductsByCategoryId(
        categoryId
      );
      return products;
    } catch (error) {
      throw new Error("Failed to get products");
    }
  },
  async getProductDetailById(productDetailId) {
    try {
      const productDetail = await ProductRepository.getProductByDetailId(
        productDetailId
      );
      return productDetail;
    } catch (error) {
      throw new Error("Failed to get product detail");
    }
  },
  async createProductDetail(productId, productDetail) {
    try {
      const product = await ProductRepository.getProductById(productId);
      product.details.push(productDetail);
      await product.save();
      return productDetail;
    } catch (error) {
      throw new Error("Failed to create product detail");
    }
  },
  async getProductDetailByIdAndProductDetailId(productId, productDetailId) {
    try {
      const product = await ProductRepository.getProductByIdAndProductDetailId(
        productId,
        productDetailId
      );
      const detail = product.details.find(
        (detail) => detail._id == productDetailId
      );
      return product;
    } catch (error) {
      throw new Error("Failed to get product detail");
    }
  },
};

module.exports = productService;
