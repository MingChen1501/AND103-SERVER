const express = require("express");
const router = express.Router();
const student = require('../../model/student.js');
const StudentService = require('../../service/StudentService');
router.get("/students", async (req, res) => {
  try {
    const students = await StudentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});
router.get("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    const student = await StudentService.getStudentById(studentId);
    if (student) {
      res.status(200).json(student);
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching student" });
  }
});
router.post("/students", async (req, res) => {
  const studentData = req.body;
  console.log(studentData);
  try {
    const result = await StudentService.createStudent(studentData);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating student" });
  }
});
router.put("/students/:id", async (req, res) => {

  const studentId = req.params.id;
  const studentData = req.body;
  try {
    await StudentService.updateStudent(studentId, studentData);
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ message: "Error updating student" });
  }
});
router.delete("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  try {
    await StudentService.deleteStudent(studentId);
    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    console.log(error.message);
    if (error.message === "Student not found") {
      res.status(404).json({ message: "Student not found" });
    } else {
      res.status(500).json({ message: "Error deleting student" });
    }
  }
});

module.exports = router;
