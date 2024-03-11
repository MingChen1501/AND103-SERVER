const express = require('express');
const mongoose = require('mongoose');
const student = require('./Student.js')
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/and103'
mongoose.connect(CONNECTION_STRING)
  .then(() => {
      console.log('Connected to MongoDB');
  }).catch((err) => {
      console.log('Error: ', err);
  });
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/students', async (req, res) => {
  const students = await student.find({});
  console.log(students)
  res.status(200).json(students);
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
