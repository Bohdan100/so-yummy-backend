const { isValidObjectId } = require("mongoose");

const path = require("path");
const { HttpError } = require(path.join(__dirname, "..", "helpers"));

const isValidId = (req, res, next) => {
  const { recipetId } = req.params;
  if (!isValidObjectId(recipetId)) {
    next(HttpError(400, `${recipetId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
