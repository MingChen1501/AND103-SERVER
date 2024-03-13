const express = require('express');
const router = express.Router();
const student = require('../../model/student.js')
const path = require('path');
const viewsPath = path.join(__dirname, '../../views/');
router.get('/students', async (req, res) => {
  const students = await student.find({});
  console.log(__dirname);
  res.status(200).render(viewsPath+'student', { students: students });
})
module.exports = router;