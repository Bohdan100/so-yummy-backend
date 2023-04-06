const { Recipe } = require('../../models');
const { HttpError, setPaginationSlice } = require('../../helpers');

const getRecipesByCategory = async (req, res) => {
  const { categoryName } = req.params;
  const capitilizedCategory =
    categoryName[0].toUpperCase() + categoryName.slice(1);

  const result = await Recipe.find({ category: capitilizedCategory });

  const { page = 1, limit = 8 } = req.query;

  if (result.length === 0) {
    return res.json({
      status: 'success',
      code: 200,
      data: {
        result: result,
      },
      total: 0,
    });
  }

  const pagination = setPaginationSlice(page, limit, result.length);
  if (!pagination) {
    throw HttpError(400, 'Incorrect pagination params');
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      result: result.slice(pagination.start, pagination.end),
    },
    total: result.length,
    page,
    limit,
  });
};

module.exports = getRecipesByCategory;
