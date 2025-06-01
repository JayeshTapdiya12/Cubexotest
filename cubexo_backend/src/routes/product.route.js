import express from 'express';

import * as productController from '../controllers/product.controller';

const router = express.Router();

// adding the product

router.post('/add', productController.addProduct);


// get the product

router.get('/get', productController.getProduct);


// get product by id
router.get('/get/:_id', productController.getproductId);

export default router;