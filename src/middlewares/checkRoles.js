import createHttpError from 'http-errors';
import { EventsCollection } from '../db/models/event.js';
import { ROLES } from '../constans/index.js';

export const checkRoles =
  (...roles) =>
  async (req, res, next) => {
    const { user } = req;
    if (!user) {
      next(createHttpError(401));
      return;
    }

    const { role } = user;
    if (roles.includes(ROLES.ADMIN) && role === ROLES.ADMIN) {
      next();
      return;
    }

    if (roles.includes(ROLES.USER) && role === ROLES.USER) {
      const { userId } = req.params;
      if (!userId) {
        next(createHttpError(403));
        return;
      }

      const user = await EventsCollection.findOne({
        _id: userId,
        userId: user._id,
      });

      if (user) {
        next();
        return;
      }
    }

    next(createHttpError(403));
  };
