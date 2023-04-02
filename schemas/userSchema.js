const Joi = require('joi');

const userJoiRegisterSchema = Joi.object({
  name: Joi.string().required().messages({ 'any.required': 'missing field name' }),
  password: Joi.string().required().messages({ 'any.required': 'missing field password' }),
  email: Joi.string()
    .pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required()
    .messages({ 'any.required': 'missing field email' }),
});

const userJoiLoginSchema = Joi.object({
  password: Joi.string().required().messages({ 'any.required': 'missing field password' }),
  email: Joi.string()
    .pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required()
    .messages({ 'any.required': 'missing field email' }),
});

const userJoiSchemaUpdate = Joi.object({
  name: Joi.string().required(),
  avatar: Joi.binary(),
});

module.exports = { userJoiRegisterSchema, userJoiLoginSchema, userJoiSchemaUpdate };
