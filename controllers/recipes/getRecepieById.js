const { Recipe } = require('../../models');
const { Ingredient } = require('../../models');

const { HttpError } = require('../../helpers');

const getRecepieById = async (req, res) => {
  const { recipeId } = req.params;

  const data = await Recipe.findById(recipeId, null, { lean: true }).populate({
    path: 'ingredients.id',
    model: Ingredient,
  });

  if (!data) {
    throw HttpError(404, 'Not found');
  }

  res.json(data);
};

module.exports = getRecepieById;
