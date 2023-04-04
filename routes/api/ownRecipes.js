const express = require('express');
const { ownRecipes: ctrl } = require('../../controllers');
const { uploadCloud } = require('../../middlewares/uploadCloudinary');
const { auth } = require('../../middlewares');

const router = express.Router();

router.get('/', auth, ctrl.getOwnRecipes);

router.get('/:recipeId', auth, ctrl.getOwnRecipeById);

router.post('/', auth, uploadCloud, ctrl.addOwnRecipe);

router.delete('/:recipeId', auth, ctrl.deleteOwnRecipe);

module.exports = router;
