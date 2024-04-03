const express = require('express');
const router = express.Router();
const student = require('../../model/student.js')
const path = require('path');
const StudentService = require('../../service/StudentService');
const viewsPath = path.join(__dirname, '../../views/'+ 'student');

router.get('/students', async (req, res) => {
  const students = await StudentService.getAllStudents();
  const studentsDto = students.map((student) => {
    return {
      id: student._id.toString(),
      fullname: student.firstName + " " + student.lastName,
      firstName: student.firstName,
      lastName: student.lastName,
      address: student.address,
    }
  });
  res.status(200).render(viewsPath, { students: studentsDto });
})
// module.exports = router;