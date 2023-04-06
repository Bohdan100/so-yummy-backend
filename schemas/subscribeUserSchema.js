const Joi = require("joi");

const subscribeUserSchema = Joi.object().keys({
  email: Joi.string()
    .pattern(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    .required()
    .messages({ "any.required": "missing field email" }),
});

module.exports = subscribeUserSchema;
