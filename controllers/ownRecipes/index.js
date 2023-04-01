const getOwnRecipes = require('./getOwnRecipes');
const addOwnRecipe = require('./addOwnRecipe');
const deleteOwnRecipe = require('./deleteOwnRecipe');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getOwnRecipes: ctrlWrapper(getOwnRecipes),
  addOwnRecipe: ctrlWrapper(addOwnRecipe),
  deleteOwnRecipe: ctrlWrapper(deleteOwnRecipe),
};
