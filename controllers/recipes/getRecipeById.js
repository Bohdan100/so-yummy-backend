const { Recipe, Ingredient } = require('../../models');

const { HttpError } = require('../../helpers');

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;

  const result = await Recipe.findById(recipeId, null, { lean: true }).populate(
    {
      path: 'ingredients.id',
      model: Ingredient,
    }
  );

  if (!result) {
    throw HttpError(404, `Recipe with  id: ${recipeId} was not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    data: result,
  });
};

module.exports = getRecipeById;
