const express = require('express');
const router = express.Router();
// const student = require('./StudentRouter.js')
const user = require('./UserRouter.js');
const category = require('./CategoryRoute.js');
const Product = require('./ProductRouter.js');
// router.use(student);
router.use(user);
router.use("/categories", category);
router.use('/products', Product)
module.exports = router;