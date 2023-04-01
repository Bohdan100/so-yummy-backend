const express = require('express');
const router = express.Router();

// const path = require('path');
// const { recipes: ctrl } = require(path.join(
//   __dirname,
//   '..',
//   '..',
//   'controllers'
// ));

const { recipes: ctrl } = require('../../controllers');

router.get('/category-list', ctrl.getCategoriesList);

router.get('/:recipeId', ctrl.getRecepieById);

router.get('/categories/:categoryName', ctrl.getRecepiesByCategory);

module.exports = router;
