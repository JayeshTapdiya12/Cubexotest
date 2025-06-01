import express from 'express';
import * as cartController from '../controllers/cart.controller'
import dotenv from 'dotenv';
dotenv.config();
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// adding product to the cart
router.post('/add/:_id', userAuth(process.env.hidden_kye), cartController.addcart);

router.get('/get', userAuth(process.env.hidden_kye), cartController.getcart);


export default router;