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

const queryAnimals = async (filter, options, trim) => {
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line security/detect-non-literal-regexp

  const name = filter.name ? filter.name : '';
  const regexp = new RegExp(`${name.toLowerCase()}`, 'i');

  let animals = await Animal.find(
    {
      $or: [
        {
          enName: { $regex: regexp },
        },
        {
          frName: { $regex: regexp },
        },
      ],
    },
    options
  );
  if (trim) {
    animals = animals.map((animal) => ({ enName: animal.enName, frName: animal.frName, imgURL: animal.imgURL }));
  }
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
