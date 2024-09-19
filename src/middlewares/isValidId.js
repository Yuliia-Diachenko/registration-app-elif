import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { eventId } = req.params;
  if (!isValidObjectId(eventId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};
