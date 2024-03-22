const Category = require('../model/Category');
const CategoryRepository = require('../repository/CategoryRepository');

const CategoryService = {
  async createCategory(category) {
    const createdCategory = await CategoryRepository.createCategory(category);
    return createdCategory;
  },
  async getCategories() {
    const categories = await CategoryRepository.getCategories();
    return categories;
  },
  async getCategoryById(id) {
    const category = await CategoryRepository.getCategoryById(id);
    return category;
  },
  async updateCategory(id, category) {
    const updatedCategory = await CategoryRepository.updateCategory(id, category);
    return updatedCategory;
  },
  async deleteCategory(id) {
    const deletedCategory = await CategoryRepository.deleteCategory(id);
    return deletedCategory;
  }
};
module.exports = CategoryService;