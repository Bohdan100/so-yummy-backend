const express = require('express');
const router = express.Router();
const { isValidId } = require('../../middlewares');

const { recipes: ctrl } = require('../../controllers');

router.get('/category-list', ctrl.getCategoriesList);

router.get('/', ctrl.getRecipesByFourCategories);

router.get('/category-list', ctrl.getCategoriesList);

router.get('/:recipeId', isValidId, ctrl.getRecipeById);

router.get('/categories/:categoryName', ctrl.getRecipesByCategory);

module.exports = router;
