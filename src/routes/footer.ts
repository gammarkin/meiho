import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.footer.getAll);
router.post('/', controller.footer.create);

export default router;
