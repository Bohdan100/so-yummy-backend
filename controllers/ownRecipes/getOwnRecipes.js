const { Recipe } = require('../../models');
const { setPaginationSlice, HttpError } = require('../../helpers');

const getRecipes = async (req, res) => {
  const userId = req?.user?._id;
  const { page = 1, limit = 4 } = req.query;
  const ownRecipes = await Recipe.find({ owner: userId });

  if (ownRecipes.length === 0) {
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: ownRecipes,
      },
      total: 0,
    });
  }

  const pagination = setPaginationSlice(page, limit, ownRecipes.length);
  if (!pagination) {
    throw HttpError(400, 'Incorrect pagination params');
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: ownRecipes.slice(pagination.start, pagination.end),
    },
    total: ownRecipes.length,
    page,
    limit,
  });
};

module.exports = getRecipes;
