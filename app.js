const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { HttpError } = require("./helpers");

const {
  authRouter,
  recipesRouter,
  favoriteRouter,
  shoppingListRouter,
  ownRecipesRouter,
  ingredientsRouter,
  searchRouter,
  popularRecipesRouter,
  subscribeRouter,
} = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/recipes", recipesRouter);
app.use("/api/favorite", favoriteRouter);
app.use("/api/shopping-list", shoppingListRouter);
app.use("/api/ownRecipe", ownRecipesRouter);
app.use("/api/ingredients", ingredientsRouter);
app.use("/api/search", searchRouter);
app.use("/api/popular-recipes", popularRecipesRouter);
app.use("/api/subscribe", subscribeRouter);

app.use((error, req, res, next) => {
  if (HttpError) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: `Internal server error: ${error.message}` });
});

module.exports = app;
