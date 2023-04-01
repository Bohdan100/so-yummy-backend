const { Recipe } = require('../../models');
const { HttpError, getListRecipe } = require('../../helpers');

const getRecipesByFourCategories = async (req, res) => {
  const options = [
    { $sample: { size: 4 } },
    { $limit: 4 },
    {
      $project: {
        createdAt: 0,
        updatedAt: 0,
        ingredients: 0,
        area: 0,
        tags: 0,
      },
    },
  ];

  const result = await Recipe.aggregate([
    {
      $facet: {
        breakfast: [{ $match: { category: 'Breakfast' } }, ...options],
        vegan: [{ $match: { category: 'Vegan' } }, ...options],
        miscellaneous: [{ $match: { category: 'Miscellaneous' } }, ...options],
        dessert: [{ $match: { category: 'Dessert' } }, ...options],
      },
    },
  ]);
  if (!result) {
    throw HttpError(404, 'Recipes for categories was not found');
  }

  const breakfast = getListRecipe(result[0].breakfast);
  const vegan = getListRecipe(result[0].vegan);
  const miscellaneous = getListRecipe(result[0].miscellaneous);
  const dessert = getListRecipe(result[0].dessert);

  res.status(200).json({
    status: 'success',
    code: 200,
    message: `Recipes for categories: 'Breakfast', 'Vegan', 'Miscellaneous', 'Dessert'  were found`,
    recipes: { breakfast, vegan, miscellaneous, dessert },
  });
};

module.exports = getRecipesByFourCategories;