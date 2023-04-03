const { Recipe } = require('../../models');

const getRecipes = async (req, res) => {
  const userId = req?.user?._id;
  const ownRecipes = await Recipe.find({ owner: userId });

  res.json({
    status: 'succes',
    code: 200,
    data: {
      result: ownRecipes,
    },
  });
};

module.exports = getRecipes;
