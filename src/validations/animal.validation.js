const Joi = require('joi');

const createAnimal = {
  body: Joi.object().keys({
    order: Joi.number().required(),
    imgURL: Joi.string().required(),
    enName: Joi.string().required(),
    frName: Joi.string().required(),
    enFood: Joi.string().required(),
    frFood: Joi.string().required(),
    enHome: Joi.string().required(),
    frHome: Joi.string().required(),
    enReproduction: Joi.string().required(),
    frReproduction: Joi.string().required(),
    enWikipediaURL: Joi.string().required(),
    frWikipediaURL: Joi.string().required(),
    categoryId: Joi.string().required(),
  }),
};

module.exports = {
  createAnimal,
};
