const { Ingredient } = require("../../models");
const { HttpError } = require("../../helpers");

const getIngredientsList = async (req, res) => {
  const ingredient = await Ingredient.find({}, "ttl");

  if (!ingredient) {
    throw HttpError(404, "Ingredients not found");
  }

  res.status(200).json(ingredient);
};

module.exports = getIngredientsList;
