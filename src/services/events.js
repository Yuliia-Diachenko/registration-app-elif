import { EventsCollection } from '../db/models/event.js';

export const getAllEvents = async () => {
    const events = await EventsCollection.find();
    return events;
  };

  export const getEventById = async (eventId) => {
    const event = await EventsCollection.findById(eventId);
    return event;
  };
