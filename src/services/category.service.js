const { Category } = require('../models');

/**
 * Create a Category
 * @param {Object} userBody
 * @returns {Promise<Category>}
 */
const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
};

const queryCategories = async (filter, options) => {
  const categories = await Category.find().populate('animals');
  return categories;
};

/**
 * Get category by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getCategoryById = async (id) => {
  return Category.findById(id);
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryById,
};
