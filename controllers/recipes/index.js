const path = require('path');
const { ctrlWrapper } = require(path.join(__dirname, '..', '..', 'helpers'));

const { getCategoriesList } = require('./getCategoryList');

const getRecepieById = require('./getRecepieById');

const getRecepiesByCategory = require('./getRecepiesByCategory');

module.exports = {
  getCategoriesList: ctrlWrapper(getCategoriesList),
  getRecepieById: ctrlWrapper(getRecepieById),
  getRecepiesByCategory: ctrlWrapper(getRecepiesByCategory),
};
