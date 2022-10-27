const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const registerValidator = Joi.object({
    firstname: Joi.string().max(200).required(),
    lastname: Joi.string().max(200).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

const loginValidator = Joi.object({
    email: Joi.string().trim().required(),
    password: Joi.string().required()
});


module.exports = {registerValidator, loginValidator}