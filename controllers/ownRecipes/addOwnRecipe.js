const { Recipe } = require('../../models');

const { validateRecipe } = require('../../schemas');

const DEFAULT_RECIPE_IMG_URL =
  'https://res.cloudinary.com/db5awxaxs/image/upload/v1680438156/cld-sample-4.jpg';

const addRecipe = async (req, res) => {
  // TODO - remove ?? '6427f577a691f46607d4d164'
  const userId = req?.user?._id ?? '6427f577a691f46607d4d164';
  const pictureURL = req.file?.path ?? DEFAULT_RECIPE_IMG_URL;

  const { body } = req;
  // console.log('body', body);
  const { error } = validateRecipe.validate(body);
  if (error) {
    res.status(400);
    res.json({ message: error.details[0]?.message });
    return;
  }
  const newRecipe = await Recipe.create({
    ...body,
    preview: pictureURL,
    owner: userId,
  });

  res.status(201).json({
    data: newRecipe,
    message: 'Create succesfull',
  });
};

module.exports = addRecipe;
