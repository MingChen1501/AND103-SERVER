const express = require('express');
const router = express.Router();
const httpRouter = require('./http/router.js')
const restRouter = require('./rest/router.js')
router.use(httpRouter);
router.use('/api', restRouter);
module.exports = router;