import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.subtextfolder.getAll);
router.post('/', controller.subtextfolder.create);

export default router;
