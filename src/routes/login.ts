import { Router } from 'express';
import controller from '../Controllers';
import validateUserExists from '../middlewares/ValidateUserExists';

const router = Router();

router.put('/history/:id', controller.login.editHistory);
router.put('/password/:id', controller.login.editPassword);
router.post('/check', controller.login.check);
router.post(
  '/', 
  validateUserExists,
  controller.login.create,
);

export default router;