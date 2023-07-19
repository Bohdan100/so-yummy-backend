const { Recipe } = require('../../models');
const { HttpError, setPaginationSlice } = require('../../helpers');

const getRecipesByCategory = async (req, res) => {
  const { categoryName } = req.params;
  const capitilizedCategory =
    categoryName[0].toUpperCase() + categoryName.slice(1);

  const result = await Recipe.find({ category: capitilizedCategory });

  if (result.length === 0) {
    throw HttpError(404, 'Not found recipes by such category');
  }

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

  const slicedResult = result.slice(pagination.start, pagination.end);

  res.json({
    status: 'success',
    code: 200,
    data: {
      slicedResult,
    },
    total: result.length,
    page,
    limit,
  });
};

module.exports = getRecipesByCategory;
