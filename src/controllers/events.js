import { getAllEvents, getEventById, createEvent, deleteEvent, updateEvent } from '../services/events.js';
import createHttpError from 'http-errors';
// import { parseSortOrder } from '../utils/parseSortOrder.js';


export const getEventsController = async (req, res) => {

    // const { page, perPage } = parsePaginationParams(req.query);
    // const { sortBy, sortOrder } = parseSortParams(req.query);

    // const contacts = await getAllContacts({page, perPage, sortBy, sortOrder, filter, userId: req.user._id });
    // res.status(200).json({
    //     status: 200,
    //     message: "Successfully found contacts!",
    //     data: contacts,
    //     query
    //   });
    const events = await getAllEvents();
    res.json({
        status: 200,
        message: 'Successfully found events!',
        data: events,
      });
};

export const getEventsByIdController = async (req, res, next) => {
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

export const createEventController = async (req, res) => {
    const event = await createEvent(req.body);

    res.status(201).json({
        status: 201,
        message: `Successfully created a event!`,
        data: event,
    });
  };

  export const deleteEventController = async (req, res, next) => {
    const { eventId } = req.params;
    const event = await  deleteEvent(eventId);

    if (!event) {
      next(createHttpError(404, 'Event not found'));
      return;
    }

    res.status(204).send();(eventId);

    if (!event) {
      next(createHttpError(404, 'Event not found'));
      return;
    }

    res.status(204).send();
  };

  export const upsertEventController = async (req, res, next) => {
    const { eventId } = req.params;
    const result = await updateEvent(eventId, req.body, {
        upsert: true,
      });

      if (!result) {
        next(createHttpError(404, 'Event not found'));
        return;
      }

      const status = result.isNew ? 201 : 200;

      res.status(status).json({
        status,
        message: `Successfully upserted a event!`,
        data: result.event,
      });
  };

  export const patchEventController = async (req, res, next) => {
    const { eventId } = req.params;
    const result = await updateEvent(eventId, req.body);

    if (!result) {
      next(createHttpError(404, 'Event not found'));
      return;
    }

    res.json({
      status: 200,
      message: `Successfully patched a event!`,
      data: result.event,
    });
  };
