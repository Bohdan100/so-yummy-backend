const { Recipe } = require('../../models');
const {
  HttpError,
  getPreparedObj,
  getSkipLimitPage,
} = require('../../helpers');

const getRecipesByCategory = async (req, res) => {
  const { categoryName } = req.params;
  const { page: sPage = 1, limit: sLimit = 9 } = req.query;

  const { skip, limit, page } = getSkipLimitPage({
    page: sPage,
    limit: sLimit,
  });

  const [result] = await Recipe.aggregate([
    { $match: { category: categoryName } },
    {
      ...getPreparedObj({ skip, limit }),
    },
  ]);

  if (!result.data.length) {
    throw HttpError(404, `Recipes with ${categoryName} was not found`);
  }

  res.status(200).json({
    status: 'success',
    code: 200,
    message: `Recipes with ${categoryName} was found`,
    recipes: { ...result.data },
    count: { ...result.count },
    page,
    limit,
  });
};

module.exports = getRecipesByCategory;
