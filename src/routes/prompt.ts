import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.post('/', controller.prompt.getter);
router.get('/', controller.prompt.get);

export default router;