import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getAllEvents, getEventById } from './services/events.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/events', async (req, res) => {
    const events = await getAllEvents();

    res.status(200).json({
      data: events,
    });
  });

  app.get('/events/:eventId', async (req, res, next) => {
    const { eventId } = req.params;
    const event = await getEventById(eventId);


	if (!event) {
	  res.status(404).json({
		  message: 'Event not found'
	  });
	  return;
	}

    res.status(200).json({
      data: event,
    });
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
