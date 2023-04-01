const path = require('path');
const { ctrlWrapper } = require(path.join(__dirname, '..', '..', 'helpers'));

const { getCategoriesList } = require('./getCategoryList');

const getRecipeById = require('./getRecipeById');

const getRecipesByCategory = require('./getRecipesByCategory');


module.exports = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecipeById: ctrlWrapper(getRecipeById),
  getRecipesByCategory: ctrlWrapper(getRecipesByCategory),
};
