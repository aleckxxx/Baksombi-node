const httpStatus = require('http-status');
const { Animal } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Animal
 * @param {Object} userBody
 * @returns {Promise<Animal>}
 */
const createAnimal = async (animalBody) => {
  if (await Animal.isNameTaken(animalBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'animal name already taken');
  }
  return Animal.create(animalBody);
};

/**
 * Query for animals
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAnimals = async (filter, options) => {
  const animals = await Animal.paginate(filter, options);
  return animals;
};

/**
 * Get animal by id
 * @param {ObjectId} id
 * @returns {Promise<Animal>}
 */
const getAnimalById = async (id) => {
  return Animal.findById(id);
};

module.exports = {
  createAnimal,
  queryAnimals,
  getAnimalById,
};
