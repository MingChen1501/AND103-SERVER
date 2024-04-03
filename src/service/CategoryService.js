const CategoryRepository = require('../repository/CategoryRepository');
const ProductService = require('./ProductService');

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
  async getCategoryByIds(ids) {
    console.log('categoryService: getCategeoryByIds');
    const categories = await CategoryRepository.getCategoriesByIds(ids);
    return categories;
  },
  async updateCategory(id, category) {
    const updatedCategory = await CategoryRepository.updateCategory(id, category);
    return updatedCategory;
  },
  async deleteCategory(id) {
    const deletedCategory = await CategoryRepository.deleteCategory(id);
    return deletedCategory;
  },
  async getCategoryByIdIncludeProduct(id) {
    const category = await CategoryRepository.getCategoryById(id);
    const products = await ProductService.getProductsByCategoryId(id);
    const result = category.toObject();
    result.products = products;
    return result;
  }
};
module.exports = CategoryService;