const authRouter = require('./auth');
const recipesRouter = require('./recipes');
const favoriteRouter = require('./favorite');
const shoppingListRouter = require('./shoppingList');
const ownRecipesRouter = require('./ownRecipes');
const ingredientsRouter = require('./ingredients');
const popularRecipesRouter = require('./popularRecipes');
const subscribeRouter = require(".//subscribe");


module.exports = {
  authRouter,
  recipesRouter,
  favoriteRouter,
  shoppingListRouter,
  ownRecipesRouter,
  ingredientsRouter,
  popularRecipesRouter,
  subscribeRouter,
};
