const recipesRouter = require("./recipes");
const favoriteRouter = require("./favorite");
const shoppingListRouter = require("./shoppingList");
const ownRecipesRouter = require("./ownRecipes");
const authRouter = require("./auth");

module.exports = {
  recipesRouter,
  favoriteRouter,
  shoppingListRouter,
  ownRecipesRouter,
  authRouter,
};
