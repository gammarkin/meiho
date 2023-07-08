import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.post('/', controller.textfolder.postTextFolder);
router.get('/', controller.textfolder.getTextFolder);

export default router;