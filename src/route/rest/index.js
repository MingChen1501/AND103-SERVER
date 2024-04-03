const express = require('express');
const router = express.Router();
// const student = require('./StudentRouter.js')
const user = require('./UserRouter.js');
const category = require('./CategoryRouter.js');
const Product = require('./ProductRouter.js');
const Cart = require('./CartRouter.js');
const Order = require('./OrderRouter.js');

// router.use(student);
router.use(user);
router.use("/categories", category);
router.use('/products', Product)
router.use('/carts', Cart)
router.use('/orders', Order)
module.exports = router;