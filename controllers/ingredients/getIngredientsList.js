const { Ingredient } = require("../../models");
const { HttpError } = require("../../helpers");

const getIngredientsList = async (req, res) => {
  // const { _id: owner } = req.user;
  const ingredient = await Ingredient.find();

  if (!ingredient) {
    throw HttpError(404, "Ingredients not found");
  }
  res.status(200).json(ingredient);
};

module.exports = getIngredientsList;
