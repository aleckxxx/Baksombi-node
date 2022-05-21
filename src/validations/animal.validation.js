const Joi = require('joi');

const createAnimal = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    imageURL: Joi.string().required(),
    food: Joi.string().required(),
    home: Joi.string().required(),
    ovipare: Joi.string().required(),
  }),
};

module.exports = {
  createAnimal,
};
