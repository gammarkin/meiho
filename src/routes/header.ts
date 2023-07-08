import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.post('/', controller.header.postHeader);
router.get('/', controller.header.getHeaders);

export default router;