const Category = require('../model/Category');

const CategoryRepository = {
  async createCategory(category) {
    return await Category.create(category);
  },
  async getCategories() {
    return await Category.find();
  },
  async getCategoryById(id) {
    return await Category.findById(id);
  },
  async updateCategory(id, category) {
    return await Category.findByIdAndUpdate(id, category, { new: true });
  },
  async deleteCategory(id) {
    return await Category.findByIdAndDelete(id);
  },
  async getCategoryByName(name) {
    return await Category.findOne({ name });
  },
  async getProductsByCategory(categoryId) {
    return await Category.findById(categoryId).populate('products');
  },
  async getProductsByCategoryName(categoryName) {
    return await Category.findOne({ name: categoryName }).populate('products');
  },
};
module.exports = CategoryRepository;