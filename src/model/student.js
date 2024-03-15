const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
})
const student = mongoose.model('students', studentSchema)
module.exports = student