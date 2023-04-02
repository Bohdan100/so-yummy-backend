const getIngredientsList = require("./getIngredientsList");
const getIngredients = require("./getIngredients");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getIngredientsList: ctrlWrapper(getIngredientsList),
  getIngredients: ctrlWrapper(getIngredients),
};
