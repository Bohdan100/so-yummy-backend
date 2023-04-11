const Joi = require('joi');

const addRecipeSchema = Joi.object().keys({
  preview: Joi.string(),
  title: Joi.string().required(),
  instructions: Joi.string().required(),
  category: Joi.string().required(),
  time: Joi.string().required(),
  ingredients: Joi.array().items(),
  description: Joi.string().required(),
});

module.exports = addRecipeSchema;
