import { EventsCollection } from '../db/models/event.js';

export const getAllEvents = async () => {
    const events = await EventsCollection.find();
    return events;
  };

export const getEventById = async (eventId) => {
    const event = await EventsCollection.findById(eventId);
    return event;
  };

export const createEvent = async (payload) => {
    const event = await EventsCollection.create(payload);
    return event;
};

export const deleteEvent = async (eventId) => {
    const event = await EventsCollection.findOneAndDelete({
    _id: eventId,
  });

    return event;
};

export const updateEvent = async (eventId, payload, options = {}) => {
  const rawResult = await EventsCollection.findOneAndUpdate(
        { _id: eventId },
        payload,
        {
          new: true,
          includeResultMetadata: true,
          ...options,
        },
      );
        if (!rawResult || !rawResult.value) return null;

        return {
          student: rawResult.value,
          isNew: Boolean(rawResult?.lastErrorObject?.upserted),
        };
      };
