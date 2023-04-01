const { UserFavorite } = require('../../models');

const getFaforites = async (req, res) => {
  // const userId = '6427f577a691f46607d4d164'; // для проверки
  const userId = '6428209efafa1b26fbbf8cdd';
  // const { _id: userId } = req.user;
  const favoriteRecipesByUserId = await UserFavorite.find({ userId });

  res.json({
    status: 'succes',
    code: 200,
    data: {
      result: favoriteRecipesByUserId,
    },
  });
};

module.exports = getFaforites;
