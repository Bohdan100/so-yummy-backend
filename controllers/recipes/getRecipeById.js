const { Recipe } = require('../../models');
const { Ingredient } = require('../../models');

const { HttpError } = require('../../helpers');

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const data = await Recipe.findById(recipeId, null, { lean: true }).populate({
    path: 'ingredients.id',
    model: Ingredient,
  });

  if (!data) {
    throw HttpError(404, `Recipe with  id: ${recipeId} was not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    message: `Recipe with  id: ${recipeId} was found`,
    recipe: data,
  });
};

module.exports = getRecipeById;
