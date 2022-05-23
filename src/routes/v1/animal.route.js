const express = require('express');
const auth = require('../../middlewares/auth');
const animalController = require('../../controllers/animal.controller');
const validate = require('../../middlewares/validate');
const animalValidation = require('../../validations/animal.validation');

const router = express.Router();

router
  .route('/')
  .post(validate(animalValidation.createAnimal), animalController.createAnimal)
  .get(auth(), animalController.getAnimals);

router.route('/:animalId').get(auth(), animalController.getAnimalById);

module.exports = router;
