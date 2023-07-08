import { Router } from 'express';
import controller from '../Controllers';

const router = Router();

router.get('/', controller.productlist.getAll);
router.post('/', controller.productlist.create);
router.get('/search', controller.productlist.getByName);

export default router;
