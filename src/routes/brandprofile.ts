import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.brandProfile.getAll);
router.post('/', controller.brandProfile.create);

export default router;
