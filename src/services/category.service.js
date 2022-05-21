const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Category
 * @param {Object} userBody
 * @returns {Promise<Category>}
 */
const createCategory = async (categoryBody) => {
  if (await Category.isNameTaken(categoryBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'category name already taken');
  }
  return Category.create(categoryBody);
};

/**
 * Query for categories
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCategories = async (filter, options) => {
  const categories = await Category.paginate(filter, options);
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
