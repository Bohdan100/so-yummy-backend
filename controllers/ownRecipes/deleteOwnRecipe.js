const { Recipe } = require("../../models");

const deleteOwnRecipe = async (req, res) => {
  const { recipeId } = req.params;

  const deletedRecipe = await Recipe.findByIdAndRemove(recipeId);

  if (!deletedRecipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }

  return res.status(200).json({ message: `Recipe with ${recipeId} deleted` });
};

module.exports = deleteOwnRecipe;
