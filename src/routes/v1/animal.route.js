const express = require('express');
const animalController = require('../../controllers/animal.controller');
const validate = require('../../middlewares/validate');
const animalValidation = require('../../validations/animal.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(animalValidation.createAnimal), animalController.createAnimal)
  .get(animalController.getAnimals);

router.route('/:animalId').get(animalController.getAnimalById);

module.exports = router;
