const { Recipe } = require('../../models');

const deleteOwnRecipe = async (req, res) => {
  const { recipeId } = req.params;

  const deletedRecipe = await Recipe.findByIdAndRemove(recipeId);
  console.log('deletedRecipe: ', deletedRecipe);
  if (!deletedRecipe) {
    res.status(404);
    res.json({ message: 'Recipe not found' });
  }

  res.json({ message: 'Recipe deleted' });
};

module.exports = deleteOwnRecipe;
