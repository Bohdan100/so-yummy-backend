const getListRecipe = (response) => {
  const recipes = response.map((recipe) => {
    const { _id, title, category, preview, thumb: fullImg } = recipe;

    return {
      _id,
      title,
      category,
      preview,
      fullImg,
    };
  });
  return recipes;
};

module.exports = getListRecipe;
