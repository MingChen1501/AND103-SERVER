const express = require('express');
const router = express.Router();
const httpRouter = require('./http/HttpRouter.js')
const restRouter = require('./rest/RestRouter.js')
router.use(httpRouter);
router.use('/api', restRouter);
module.exports = router;