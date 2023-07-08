import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.components.getAll);
router.post('/', controller.components.create);

export default router;
