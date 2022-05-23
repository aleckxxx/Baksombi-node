const { Category } = require('../models');
const { Animal } = require('../models');

const createCategory = async (categoryBody) => {
  return Category.create(categoryBody);
};

const queryCategories = async (filter, options) => {
  // eslint-disable-next-line prefer-const
  let categories = await Category.find();

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < categories.length; index++) {
    const category = categories[index];
    // eslint-disable-next-line no-await-in-loop
    const animals = await Animal.find({ categoryId: category.id }).select('id');
    categories[index].animals = animals.map((animal) => animal.id);
  }
  return categories;
};

const getCategoryById = async (id) => {
  // eslint-disable-next-line prefer-const
  // Don't know why Category.findById doesnot work
  const categories = await Category.find();
  const category = categories.find((cat) => cat.id === id);

  const animals = await Animal.find({ categoryId: category.id }).select('id');
  category.animals = animals.map((animal) => animal.id);
  return category;
};

module.exports = {
  createCategory,
  queryCategories,
  getCategoryById,
};
