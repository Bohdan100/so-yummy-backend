const { RecipeFavorite } = require('../../models');

const getPopularRecipes = async (req, res) => {
  const popularRecipes = await RecipeFavorite.find({}).populate(
    'recipe',
    '_id title description preview thumb'
  );

  if (popularRecipes.length !== 0) {
    const sortPopularRecipesByAmount = popularRecipes.sort(
      (firstRecipe, secondRecipe) => secondRecipe.amount - firstRecipe.amount
    );

    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: sortPopularRecipesByAmount.slice(0, 4),
      },
    });
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: popularRecipes,
    },
    message: 'There are no popular recipe yet',
  });
};

module.exports = getPopularRecipes;
