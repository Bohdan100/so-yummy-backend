const { UserFavorite, RecipeFavorite } = require('../../models');
const { HttpError } = require('../../helpers');

const addFavorite = async (req, res) => {
  const { _id: userId } = req.user;
  const { recipeId } = req.params;

  const userFavorite = await UserFavorite.findOne({ userId, recipeId });

  if (userFavorite) {
    throw HttpError(
      409,
      `The recipe with id - ${recipeId} already exists in favorites of the user with id - ${userId}`
    );
  }
  await UserFavorite.create({ userId, recipeId });

  const recipeFavorite = await RecipeFavorite.findOne({ recipeId });

  if (recipeFavorite) {
    recipeFavorite.amount += 1;
    await recipeFavorite.save();
  } else {
    await RecipeFavorite.create({ recipeId, amount: 1 });
  }

  res.status(201).json({
    status: 'success',
    code: 201,
    message: `Recipe with ${recipeId} was added to favorites`,
  });
};

module.exports = addFavorite;
