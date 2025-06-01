import express from 'express';
import * as userController from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// login
router.post('/login', userController.login)


//sign
router.post('', userController.newUser);

// sign seller

// router.post('/seller', userController.seller);


export default router;
