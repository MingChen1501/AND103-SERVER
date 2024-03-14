const express = require('express');
const router = express.Router();
const student = require('./StudentRouter.js')
const user = require('./UserRouter.js');

router.use(student);
router.use(user);
module.exports = router;