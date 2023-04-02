const path = require('path');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { HttpError } = require(path.join(__dirname, 'helpers'));

const { authRouter } = require('./routes/api');
const { recipesRouter } = require('./routes/api');
const { favoriteRouter } = require('./routes/api');
const { shoppingListRouter } = require('./routes/api');
const { ownRecipesRouter } = require('./routes/api');
const { ingredientsRouter } = require('./routes/api');
const { popularRecipesRouter } = require('./routes/api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/shopping-list', shoppingListRouter);
app.use('/api/ownRecipe', ownRecipesRouter);
app.use('/api/ingredients', ingredientsRouter);
app.use('/api/popular-recipes', popularRecipesRouter);

app.use((error, req, res, next) => {
  if (HttpError) {
    return res.status(error.status).json({ message: error.message });
  }

  res.status(500).json({ message: `Internal server error: ${error.message}` });
});

module.exports = app;
