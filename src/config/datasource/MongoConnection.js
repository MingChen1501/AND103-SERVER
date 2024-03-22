const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/and103'
mongoose.connect(CONNECTION_STRING)
  .then(() => {
      console.log('Connected to MongoDB');
  }).catch((err) => {
      console.log('Error: ', err);
  });
module.exports = mongoose;