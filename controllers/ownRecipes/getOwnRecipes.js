const { Recipe } = require("../../models");

const getRecipes = async (req, res) => {
  // TODO - remove ?? '6427f577a691f46607d4d164'
  const userId = req?.user?._id ?? "6427f577a691f46607d4d164";
  const ownRecipes = await Recipe.find({ owner: userId });

  res.json({
    status: "succes",
    code: 200,
    data: {
      result: ownRecipes,
    },
  });
};

module.exports = getRecipes;
