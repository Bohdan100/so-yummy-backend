const getListRecipe = (response) => {
  const recipes = response.map((recipe) => {
    const { _id, title, category, preview, thumb } = recipe;

    return {
      _id,
      title,
      category,
      preview,
      thumb,
    };
  });
  return recipes;
};

module.exports = getListRecipe;
