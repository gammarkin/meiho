import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.klaviyo.getAll);
router.post('/', controller.klaviyo.create);

export default router;
