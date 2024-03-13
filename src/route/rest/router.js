const express = require('express');
const router = express.Router();
const student = require('./student.js')

router.use(student);
module.exports = router;