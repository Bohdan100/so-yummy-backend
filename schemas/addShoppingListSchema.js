const Joi = require("joi");

const addShoppingListSchema = Joi.object().keys({
  strIngredient: Joi.string().required(),
  weight: Joi.string().required(),
  image: Joi.string().required(),
  recipeId: Joi.string().required(),
});

module.exports = addShoppingListSchema;
