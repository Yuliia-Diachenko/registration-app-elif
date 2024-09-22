import Joi from 'joi';

export const createEventSchema = Joi.object({
  title: Joi.string().min(5).max(50).required().messages({
    'string.base': 'Title should be a string',
    'string.min': 'Title should have at least {#limit} characters',
    'string.max': 'Title should have at most {#limit}characters',
    'any.required': 'Title is required',
  }),
  description: Joi.string().min(5).max(1000).required().messages({
    'string.base': 'Description should be a string',
    'string.min': 'Description should have at least {#limit} characters',
    'string.max': 'Description should have at most {#limit} characters',
    'any.required': 'Description is required',
  }),
  event_date: Joi.date().min('now').max('1-1-2026').required(),
  organizer: Joi.string().min(3).max(50).required().messages({
    'string.base': 'Organizer: should be a string',
    'string.min': 'Organizer should have at least {#limit} characters',
    'string.max': 'Organizer should have at most {#limit} characters',
    'any.required': 'Organizer is required',
  }),
  userId: Joi.string().required(),
});

export const updateEventSchema = Joi.object({
    title: Joi.string().min(5).max(50).messages({
      'string.base': 'Title should be a string',
      'string.min': 'Title should have at least {#limit} characters',
      'string.max': 'Title should have at most {#limit}characters',
    }),
    description: Joi.string().min(5).max(1000).messages({
      'string.base': 'Description should be a string',
      'string.min': 'Description should have at least {#limit} characters',
      'string.max': 'Description should have at most {#limit} characters',
    }),
    event_date: Joi.date().min('now').max('1-1-2026'),
    organizer: Joi.string().min(3).max(50).messages({
      'string.base': 'Organizer: should be a string',
      'string.min': 'Organizer should have at least {#limit} characters',
      'string.max': 'Organizer should have at most {#limit} characters',
    }),
  });
