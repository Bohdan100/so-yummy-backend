const express = require('express');
const { ownRecipes: ctrl } = require('../../controllers');
// const { auth } = require('../../middlewares');

const router = express.Router();


router.get('/',
// auth,
ctrl.getOwnRecipes);

router.post('/',
//  auth,
  ctrl.addOwnRecipe);

router.delete('/:recipeId', 
// auth,
 ctrl.deleteOwnRecipe);

module.exports = router;
