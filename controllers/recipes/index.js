const { ctrlWrapper } = require('../../helpers');

const getRecipeById = require('./getRecipeById');

const getRecipesByCategory = require('./getRecipesByCategory');

const getRecipesByFourCategories = require('./getRecipesByFourCategories');

const getCategoriesList = require('./getCategoriesList');

module.exports = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
  getRecipesByFourCategories: ctrlWrapper(getRecipesByFourCategories),
};
