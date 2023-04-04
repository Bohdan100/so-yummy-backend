const { Recipe } = require('../../models');

const getOwnRecipeById = async (req, res) => {
  const { _id: userId } = req.user;
  const { recipeId } = req.params;

  const ownRecipe = await Recipe.findOneAndDelete({
    owner: userId,
    recipe: recipeId,
  });
  if (!ownRecipe) {
    res.status(404);
    res.json({ message: 'Recipe not found' });
  }

  res.json({
    status: 'success',
    code: 200,
    message: `Recipe with  id: ${recipeId} was found`,
    data: {
      result: ownRecipe,
    },
  });
};

module.exports = getOwnRecipeById;
