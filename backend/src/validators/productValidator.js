const Joi = require('joi');

const createProductSchema = Joi.object({
    img: Joi.string().required(),
    name: Joi.string().required(),
    category: Joi.string().valid("T-Shirts", "Hoodies", "Accessories", "Jeans", "Footwear").required(),
    price: Joi.number().min(1).required(),
    quantity: Joi.number().required(),
});

const updateProductSchema = Joi.object({
    img: Joi.string(),
    name: Joi.string(),
    category: Joi.string().valid("T-Shirts", "Hoodies", "Accessories", "Jeans", "Footwear"),
    price: Joi.number().min(1),
    quantity: Joi.number(),
}).min(1); // Require at least one field to be updated

module.exports = {
    createProductSchema,
    updateProductSchema,
};
