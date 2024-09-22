import { checkRoles } from "../middlewares/checkRoles";
import { authenticate } from "../middlewares/authenticate";
import { Router } from "express";
import { ROLES } from "../constans/index.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { getCheckEventsByIdController } from "../controllers/participants.js";


const router = Router();

router.use(authenticate);

router.get('/:eventId/participants', checkRoles(ROLES.ADMIN, ROLES.USER), ctrlWrapper(getCheckEventsByIdController));
