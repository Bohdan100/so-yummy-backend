const Joi = require("joi");

const addShoppingListSchema = Joi.object().keys({
  strIngredient: Joi.string().required().min(2).max(35),
  weight: Joi.string().required().min(2).max(10),
  image: Joi.string().required(),
  recipeId: Joi.string().required(),
});

module.exports = addShoppingListSchema;
