import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.styles.getAll);
router.post('/', controller.styles.create);

export default router;
