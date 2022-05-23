const express = require('express');
const auth = require('../../middlewares/auth');
const categoryController = require('../../controllers/category.controller');

const router = express.Router();

router.route('/').post(categoryController.createCategory).get(auth(), categoryController.getCategories);

router.route('/:categoryId').get(auth(), categoryController.getCategory);

module.exports = router;
