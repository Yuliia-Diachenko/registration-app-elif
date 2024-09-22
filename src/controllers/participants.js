import createHttpError from 'http-errors';
import { getEventById } from '../services/events';

export const getCheckEventsByIdController = async (req, res, next) => {
    const { eventId } = req.params;
    const event = await getEventById(eventId);

	if (!event) {
        throw createHttpError(404, 'Event not found');
    }

    res.json({
        status: 200,
        message: `Successfully found event with id ${eventId}!`,
        data: event
  });
};
