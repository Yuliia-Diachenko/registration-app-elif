import { Router } from "express";
import {    getEventsController,
            getEventsByIdController,
            createEventController,
            deleteEventController,
            upsertEventController,
            patchEventController
        } from "../controllers/events.js";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createEventSchema, updateEventSchema } from '../validation/events.js';
import { isValidId } from '../middlewares/isValidId.js';

const router = Router();

router.get('/events', ctrlWrapper(getEventsController));

router.get('/events/:eventId', isValidId, ctrlWrapper(getEventsByIdController));

router.post('/events', validateBody(createEventSchema), ctrlWrapper(createEventController));

router.delete('/events/:eventId', ctrlWrapper(deleteEventController));

router.put('/events/:eventId', validateBody(updateEventSchema), ctrlWrapper(upsertEventController));

router.patch('/events/:eventId', validateBody(updateEventSchema), ctrlWrapper(patchEventController));

export default router;
