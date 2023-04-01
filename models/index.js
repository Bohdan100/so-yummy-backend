const User = require('./user');

const { Recipe } = require('./recipe');
const { Ingredient } = require('./ingredient');
const UserFavorite = require('./userFavorite');
const RecipeFavorite = require('./recipeFavorite');
const ShoppingList = require('./shoppingList');

module.exports = {
  User,
  Recipe,
  Ingredient,
  UserFavorite,
  RecipeFavorite,
  ShoppingList,
};
