/* eslint-disable @typescript-eslint/quotes */
import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.post('/', controller.herobanner.postHeroBanner);
router.get('/', controller.herobanner.getHeroBanner);

export default router;