const { Recipe } = require('../../models');

const { HttpError } = require('../../helpers');

const getContactByCategory = async (req, res) => {
  const { categoryName } = req.params;

  const result = await Recipe.find({ category: categoryName }).exec();

  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};

module.exports = getContactByCategory;
