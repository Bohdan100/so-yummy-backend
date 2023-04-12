const { UserFavorite } = require("../../models");

const { setPaginationSlice } = require("../../helpers");

const getFavorites = async (req, res) => {
  const { _id: userId } = req.user;

  const favoriteRecipesByUserId = await UserFavorite.find({ userId }).populate(
    "recipe",
    "_id title category description thumb preview time"
  );
  const { page = 1, limit = 4 } = req.query;

  if (favoriteRecipesByUserId.length === 0) {
    return res.json({
      status: "success",
      code: 200,
      data: {
        result: favoriteRecipesByUserId,
      },
      total: 0,
    });
  }

  const pagination = setPaginationSlice(
    page,
    limit,
    favoriteRecipesByUserId.length
  );
  if (!pagination) {
    return res.json({
      status: "success",
      code: 200,
      data: favoriteRecipesByUserId,
      total: favoriteRecipesByUserId.length,
    });
  }

  return res.json({
    status: "success",
    code: 200,
    data: {
      result: favoriteRecipesByUserId.slice(pagination.start, pagination.end),
    },
    total: favoriteRecipesByUserId.length,
    page,
    limit,
  });
};

module.exports = getFavorites;
