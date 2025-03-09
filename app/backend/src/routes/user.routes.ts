import { Router, Request, Response } from 'express';
import UserController from '../controllers/UserController';
import { LoginValidation, TokenValidation } from '../middlewares';

const router = Router();
const userController = new UserController();

router.post('/', LoginValidation.inputLogin, (req: Request, res: Response) => { userController.login(req, res) });

router.get('/role', TokenValidation.verifyToken, (req: Request, res: Response) => { userController.getRole(req, res) });

export default router;