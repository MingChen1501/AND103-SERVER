const mongoose = require('mongoose');

const CONNECTION_STRING = process.env.MONGO_URI;
mongoose.connect(CONNECTION_STRING)
  .then(() => {
      console.log('Connected to MongoDB');
  }).catch((err) => {
      console.log('Error: ', err);
  });
module.exports = mongoose;