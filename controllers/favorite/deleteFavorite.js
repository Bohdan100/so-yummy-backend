const { UserFavorite, RecipeFavorite } = require('../../models');
const { HttpError } = require('../../helpers');

const deleteFavorite = async (req, res) => {
  const { _id: userId } = req.user;
  const { recipeId } = req.params;

  const userFavorite = await UserFavorite.findOneAndDelete({ userId, recipe: recipeId });

  if (!userFavorite) {
    throw HttpError(404, `There is no such recipe with id ${recipeId}`);
  }

  const recipeFavorite = await RecipeFavorite.findOne({ recipe: recipeId });

  if (recipeFavorite && recipeFavorite.amount > 0) {
    recipeFavorite.amount -= 1;
    await recipeFavorite.save();
  } else {
    throw HttpError(404, `There is no such recipe with id ${recipeId}`);
  }

  res.json({
    status: 'succes',
    code: 200,
    message: `Recipe with id - ${recipeId} deleted from favorites `,
  });
};

module.exports = deleteFavorite;
