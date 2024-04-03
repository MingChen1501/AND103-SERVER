const mongoose = require('mongoose');
const User = require('../../model/User');
const Category = require('../../model/Category');
const Product = require('../../model/Product');

const CONNECTION_STRING = process.env.MONGO_URI;
mongoose.connect(CONNECTION_STRING)
  .then(() => {
      console.log('Connected to MongoDB');
  }).catch((err) => {
      console.log('Error: ', err);
  });
// User.find({})
//   .then(users => {
//     console.log('Users: ', users)
//   })
//   .catch(err => {
//     console.log('Error: ', err)
//   });
// Category.find({})
//   .then(categories => {
//     console.log('Categories: ', categories)
//   })
//   .catch(err => {
//     console.log('Error: ', err)
//   });
// Product.find({})
//   .then(products => {
//     console.log('Products: ', products)
//   })
//   .catch(err => {
//     console.log('Error: ', err)
//   });
module.exports = mongoose;