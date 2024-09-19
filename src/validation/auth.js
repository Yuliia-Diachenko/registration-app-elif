import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({ 'string.email': 'Invalid email format' }),
  date_birth: Joi.date().min(new Date('1900-01-01')).max(new Date('2022-01-01')).required().messages({
    'date.min': 'Date of birth should be after 1900-01-01',
    'date.max': 'Date of birth should be before 2022-01-01',
    'any.required': 'Date of birth is required',
  }),
  where_here: Joi.string().valid('Social media', 'Friends', 'Found myself').required(),
});

