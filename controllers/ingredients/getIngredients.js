const Recipe = require("../../models/recipe");
const Ingredients = require("../../models/ingredient");
const { HttpError } = require("../../helpers");

const getIngredients = async (req, res) => {
  const { query } = req.params;

  const ingredient = await Ingredients.findOne({
    ttl: { $regex: query, $options: "i" },
  });

  if (!ingredient) {
    throw HttpError(`Ingredient ${query} not found`);
  }

  const recipes = await Recipe.find({
    ingredients: { $elemMatch: { id: ingredient._id } },
  });

  if (!recipes) {
    throw HttpError(`Recipes with ${query} not found`);
  }
  res.status(200).json(ingredient);
};

module.exports = getIngredients;
