const { UserFavorite } = require('../../models');

const getFavoriteById = async (req, res) => {
  const { _id: userId } = req.user;
  const { recipeId } = req.params;

  const favoriteRecipe = await UserFavorite.findOneAndDelete({ userId, recipe: recipeId });

  if (!favoriteRecipe) {
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: false,
      },
    });
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: true,
    },
  });
};

module.exports = getFavoriteById;
