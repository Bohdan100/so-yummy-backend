const { Recipe } = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
const { setPaginationSlice } = require("../../helpers");
const { HttpError } = require("../../helpers");

const getIngredients = async (req, res) => {
  const { query } = req.params;

  const ingredient = await Ingredient.findOne({
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

  const { page = 1, per_page = recipes.length } = req.query;

  const pagination = setPaginationSlice(page, per_page, recipes.length);
  if (!pagination) {
    throw HttpError(400, "Incorrect pagination params");
  }

  res.status(200).json({
    totalHits: recipes.length,
    meals: recipes.slice(pagination.start, pagination.end),
  });
};

module.exports = getIngredients;
