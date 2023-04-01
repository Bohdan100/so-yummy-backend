const getFaforites = require('./getFaforites');
const addFavorite = require('./addFavorite');
const deleteFavorite = require('./deleteFavorite');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getFaforites: ctrlWrapper(getFaforites),
  addFavorite: ctrlWrapper(addFavorite),
  deleteFavorite: ctrlWrapper(deleteFavorite),
};
