const StudentModel = require("../model/student.js");
/* 
DEPRECATED
*/
// Define a function to handle the "get all students" request
const getAllStudents = async (req, res) => {
  try {
    // Call the model to fetch all students from your data source
    const students = await StudentModel.find();

    // Return the students data to the router
    return students;
  } catch (error) {
    // Handle any errors that occur during the process
    throw new Error("Internal Server Error");
  }
};
const getStudentById = async (studentId) => {
  try {
    const student = await StudentModel.findById(studentId);
    return student;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
const createStudent = async (studentData) => {
  try {
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
const updateStudent = async (studentId, studentData) => {
  try {
    const updatedStudent = await StudentModel.findByIdAndUpdate(
      studentId,
      studentData,
      { new: true }
    );
    return updatedStudent;
  } catch (error) {
    throw new Error("Internal Server Error");
  }
};
const deleteStudent = async (studentId) => {
  try {
    const deletedStudent = await StudentModel.findByIdAndDelete(studentId);
    if (!deletedStudent) {
      throw new Error("Student not found");
    }
    return deletedStudent;
  } catch (error) {
    if (error.message === "Student not found") {
      throw new Error("Student not found");
    }
    throw new Error("Internal Server Error");
  }
};
// Export the function so it can be used in other files
module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
