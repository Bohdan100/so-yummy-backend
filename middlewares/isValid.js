const { isValidObjectId } = require('mongoose');

const path = require('path');
const { HttpError } = require(path.join(__dirname, '..', 'helpers'));

const isValidId = (req, res, next) => {
  const { recipeId } = req.params;
  if (!isValidObjectId(recipeId)) {
    next(HttpError(400, `${recipeId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
