const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const { HttpError } = require(path.join(__dirname, 'helpers'));

const { favoriteRouter } = require('./routes/api');
const { recipesRouter } = require(path.join(__dirname, 'routes', 'api'));
const { shoppingListRouter } = require('./routes/api');
const { ownRecipesRouter } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/recipes', recipesRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/shopping-list', shoppingListRouter);
app.use('/api/ownRecipe', ownRecipesRouter);

app.use((error, req, res, next) => {
  if (HttpError) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: `Internal server error: ${error.message}` });
});

module.exports = app;
