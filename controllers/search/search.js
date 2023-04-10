const { Recipe } = require("../../models/recipe");
const { Ingredient } = require("../../models/ingredient");
const { setPaginationSlice } = require("../../helpers");
const { HttpError } = require("../../helpers");

const getSearchRecipes = async (req, res, next) => {
  const { type, query, page, perPage } = req.query;

  let recipes = [];

  if (type === "Ingredients") {
    const ingredient = await Ingredient.findOne({
      ttl: { $regex: query, $options: "i" },
    });
    if (!ingredient) {
      return res.json({ totalHits: 0, meals: [] });
    }
    recipes = await Recipe.find({
      ingredients: { $elemMatch: { id: ingredient._id } },
    });
  }

  if (type === "Title") {
    recipes = await Recipe.find({
      title: { $regex: query, $options: "i" },
    });
  }

  if (recipes.length === 0) {
    return res.json({ totalHits: 0, meals: [] });
  }

  const pagination = setPaginationSlice(page, perPage, recipes.length);
  if (!pagination) {
    next(HttpError(400, "Incorrect pagination params"));
  }

  return res.status(200).json({
    totalHits: recipes.length,
    meals: recipes.slice(pagination.start, pagination.end),
  });
};

module.exports = getSearchRecipes;
