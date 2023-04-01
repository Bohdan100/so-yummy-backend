const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const { HttpError } = require(path.join(__dirname, "helpers"));

const { recipesRouter } = require(path.join(__dirname, "routes", "api"));
const { shoppingListRouter } = require("./routes/api");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/recipes", recipesRouter);
app.use("/shopping-list", shoppingListRouter);

app.use((error, req, res, next) => {
  if (HttpError) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: `Internal server error: ${error.message}` });
});

module.exports = app;
