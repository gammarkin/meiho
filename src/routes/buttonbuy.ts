import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.buttonbuy.getAll);
router.post('/', controller.buttonbuy.create);

export default router;
