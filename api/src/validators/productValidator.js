const Joi = require("joi");

const createProductSchema = Joi.object({
  imageUrl: Joi.string().required(),
  name: Joi.string().required(),
  category: Joi.string().required(),
  price: Joi.number().min(1).required(),
  quantity: Joi.number().required(),
});

const updateProductSchema = Joi.object({
  imageUrl: Joi.string(),
  name: Joi.string(),
  category: Joi.string(),
  price: Joi.number().min(1),
  quantity: Joi.number(),
}).min(1);

module.exports = {
  createProductSchema,
  updateProductSchema,
};
