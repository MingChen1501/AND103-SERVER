const express = require("express");
const router = express.Router();
const student = require("../../model/student.js");
router.get("/students", async (req, res) => {
  //refactoring: call service layer
  await student
    .find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error fetching students" });
    });
});
router.get("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  //refactoring: call service layer
  await student
    .findById(studentId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error fetching student" });
    });
});
router.post("/students", async (req, res) => {
  const studentData = req.body;
  const newStudent = new student(studentData);
  //refactoring: call service layer
  await newStudent
    .save()
    .then((data) => {
      res.status(201).json(newStudent);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error creating student" });
    });
});
router.put("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  const studentData = req.body;
  //refactoring: call service layer
  await student.findById
    .AndUpdate(studentId, studentData)
    .then((data) => {
      res.status(200).json(studentData);
    })
    .catch((error) => {
      res.status(500).json({ message: "Error updating student" });
    });
});
router.delete("/students/:id", async (req, res) => {
  const studentId = req.params.id;
  //TODO: Implement delete student by id
  //Hint: Use the findByIdAndDelete method
  //refactoring: call service layer
  await student
    .findByIdAndDelete(studentId)
    .then((data) => {
      res.status(200).json({ message: "Student deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Error deleting student" });
    });
});

module.exports = router;
