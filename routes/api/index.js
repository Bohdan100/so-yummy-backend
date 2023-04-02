const authRouter = require("./auth");
const recipesRouter = require("./recipes");
const favoriteRouter = require("./favorite");
const shoppingListRouter = require("./shoppingList");
const ownRecipesRouter = require("./ownRecipes");
const ingredientsRouter = require("./ingredients");


module.exports = {
  authRouter,
  recipesRouter,
  favoriteRouter,
  shoppingListRouter,
  ownRecipesRouter,
  ingredientsRouter,
};
