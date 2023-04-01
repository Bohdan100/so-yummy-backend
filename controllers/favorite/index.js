const getFavorites = require('./getFavorites');
const addFavorite = require('./addFavorite');
const deleteFavorite = require('./deleteFavorite');
const { ctrlWrapper } = require('../../helpers');

module.exports = {
  getFavorites: ctrlWrapper(getFavorites),
  addFavorite: ctrlWrapper(addFavorite),
  deleteFavorite: ctrlWrapper(deleteFavorite),
};
