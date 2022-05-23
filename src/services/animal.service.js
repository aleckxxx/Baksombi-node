const httpStatus = require('http-status');
const { Animal } = require('../models');
const ApiError = require('../utils/ApiError');

const createAnimal = async (animalBody) => {
  if (await Animal.isNameTaken(animalBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'animal name already taken');
  }
  return Animal.create(animalBody);
};

const queryAnimals = async (filter, options, trim, lang) => {
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line security/detect-non-literal-regexp

  const name = filter.name ? filter.name : '';
  // eslint-disable-next-line security/detect-non-literal-regexp
  const regexp = new RegExp(`${name.toLowerCase()}`, 'i');
  const criteria =
    lang === 'en'
      ? {
          enName: { $regex: regexp },
        }
      : {
          frName: { $regex: regexp },
        };

  let animals = await Animal.find(
    {
      $or: [criteria],
    },
    options
  );
  if (trim) {
    animals = animals.map((animal) => ({
      id: animal.id,
      enName: animal.enName,
      frName: animal.frName,
      imgURL: animal.imgURL,
    }));
  }
  return animals;
};

const getAnimalById = async (id) => {
  return Animal.findById(id);
};

module.exports = {
  createAnimal,
  queryAnimals,
  getAnimalById,
};
