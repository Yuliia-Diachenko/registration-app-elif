import { EventsCollection } from '../db/models/event.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constans/index.js';

export const getAllEvents = async ({
      page = 1,
      perPage = 10,
      sortOrder = SORT_ORDER.ASC,
      sortBy = '_id',
      filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const eventsQuery = EventsCollection.find();
  if (filter.event_date) {
    eventsQuery.where('event_date').equals(filter.event_date);
  }
  if (filter.title) {
   eventsQuery.where('title').equals(filter.title);
  }
  if (filter.organizer) {
    eventsQuery.where('organizer').equals(filter.organizer);
  }

  const [eventsCount, events] = await Promise.all([
    EventsCollection.find().merge(eventsQuery).countDocuments(),
    eventsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec(),
  ]);

  const paginationData = calculatePaginationData(eventsCount, perPage, page);

  return {
    data: events,
    ...paginationData,
  };

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
