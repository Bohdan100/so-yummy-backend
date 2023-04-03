const auth = require('./auth');
const recipes = require('./recipes');
const favorite = require('./favorite');
const shoppingList = require('./shoppingList');
const ownRecipes = require('./ownRecipes');
const ingredients = require('./ingredients');
const subscribe = require("./subscribe");
const popularRecipes = require('./popularRecipes');


module.exports = {
  auth,
  recipes,
  favorite,
  shoppingList,
  ownRecipes,
  ingredients,
  subscribe,
  popularRecipes,
};
