import { Router } from 'express';
import eventsRouter from './events.js';
import authRouter from './auth.js';

const router = Router();

router.use('/events', eventsRouter);
router.use('/auth', authRouter);

export default router;
