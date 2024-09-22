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
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from "../constans/index.js";

const router = Router();

router.use(authenticate);

router.get('/',  ctrlWrapper(getEventsController));

// router.get('/:eventId/participants', checkRoles(ROLES.ADMIN, ROLES.USER), ctrlWrapper(getEventsByIdController));

router.get('/:eventId', isValidId, ctrlWrapper(getEventsByIdController));

// router.post('/register', checkRoles(ROLES.ADMIN, ROLES.USER), validateBody(createEventSchema), ctrlWrapper(createEventController));

router.post('/', checkRoles(ROLES.ADMIN), validateBody(createEventSchema), ctrlWrapper(createEventController));

router.delete('/:eventId', checkRoles(ROLES.ADMIN), ctrlWrapper(deleteEventController));

router.put('/:eventId', checkRoles(ROLES.ADMIN), validateBody(updateEventSchema), ctrlWrapper(upsertEventController));

router.patch('/:eventId',  validateBody(updateEventSchema), ctrlWrapper(patchEventController));

export default router;
