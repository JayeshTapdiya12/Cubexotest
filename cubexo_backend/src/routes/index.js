import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import productRoute from './product.route'
import cartRoute from './cart.route'
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/product', productRoute)
  router.use('/cart', cartRoute)

  return router;
};

export default routes;
