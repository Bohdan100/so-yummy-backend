const getSearchRecipes = require("./search");
const { ctrlWrapper } = require("../../helpers");

module.exports = {
  getSearchRecipes: ctrlWrapper(getSearchRecipes),
};
