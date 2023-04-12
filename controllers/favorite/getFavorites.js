const { UserFavorite } = require("../../models");

// ? 1 - ВАРИАНТ - пока не удалять
// const getFavorites = async (req, res) => {
// const { _id: userId } = req.user;
//   const { page = 1, limit = 4 } = req.query;
//   const skip = (page - 1) * limit;

//   const favoriteRecipesByUserId = await UserFavorite.find({ userId }, '', {
//     skip,
//     limit: Number(limit),
//   }).populate('recipe', '_id title category description thumb preview time');

//   res.json({
//     status: 'succes',
//     code: 200,
//     data: {
//       result: favoriteRecipesByUserId,
//     },
//     page,
//     limit,
//   });
// };

// module.exports = getFavorites;

// 2 - ВАРИАНТ;
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
    });
  }

  res.json({
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
