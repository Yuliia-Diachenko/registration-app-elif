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

router.get('/', ctrlWrapper(getEventsController));

router.get('/:eventId', isValidId, ctrlWrapper(getEventsByIdController));

router.post('/register', validateBody(createEventSchema), ctrlWrapper(createEventController));

router.post('/', validateBody(createEventSchema), ctrlWrapper(createEventController));

router.delete('/:eventId', ctrlWrapper(deleteEventController));

router.put('/:eventId', validateBody(updateEventSchema), ctrlWrapper(upsertEventController));

router.patch('/:eventId', validateBody(updateEventSchema), ctrlWrapper(patchEventController));

export default router;
