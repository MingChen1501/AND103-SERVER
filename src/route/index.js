const express = require('express');
const router = express.Router();
const httpRouter = require('./http')
const restRouter = require('./rest')
// router.use(httpRouter);
router.use('/api', restRouter);
module.exports = router;