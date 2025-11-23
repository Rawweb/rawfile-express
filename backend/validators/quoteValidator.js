const Joi = require('joi');

const quoteSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).required(),

  email: Joi.string()
    .email({ tlds: { allow: true } })
    .invalid('example.com', 'test.com', 'fake.com', 'example.org')
    .custom((value, helpers) => {
      const domain = value.split('@')[1];
      if (['example.com', 'example.net', 'example.org'].includes(domain)) {
        return helpers.error('any.invalid');
      }
      return value;
    })
    .required()
    .messages({
      'any.invalid': 'Please enter a real, active email address',
    }),

  phone: Joi.string()
    .pattern(/^[0-9+()\-\s]{7,20}$/)
    .required()
    .messages({
      'string.pattern.base': 'Phone number is invalid',
    }),

  pickup: Joi.string().min(2).max(100).required(),
  delivery: Joi.string().min(2).max(100).required(),

  dateTime: Joi.string().min(5).required(),

  details: Joi.string().allow('', null),
});

module.exports = quoteSchema;
