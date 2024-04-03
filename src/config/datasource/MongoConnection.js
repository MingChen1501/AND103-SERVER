const mongoose = require('mongoose');
const User = require('../../model/User');
const Category = require('../../model/Category');
const Product = require('../../model/Product');
const Cart = require('../../model/Cart');
const Order = require('../../model/Order');

const CONNECTION_STRING = process.env.MONGO_URI;
mongoose.connect(CONNECTION_STRING)
  .then(() => {
      console.log('Connected to MongoDB');
  }).catch((err) => {
      console.log('Error: ', err);
  });
  // TEST SCHEMAS USER
/*   
User.find({})
  .then(users => {
    console.log('Users: ', JSON.stringify(users, null, 2))
  })
  .catch(err => {
    console.log('Error: ', err)
  });
 */

  // TEST SCHEMAS CATEGORY
  /* 
Category.find({})
  .then(categories => {
    console.log('Categories: ', JSON.stringify(categories, null, 2))
  })
  .catch(err => {
    console.log('Error: ', err)
  });
 */

  // TEST SCHEMAS PRODUCT
  
/* 
Product.find({})
  .then(products => {
    console.log('Products: ', JSON.stringify(products, null, 2))
  })
  .catch(err => {
    console.log('Error: ', err)
  });
   */

  // TEST SCHEMAS CART

/* 
 Cart.find({})
  .then(carts => {
    console.log('Carts: ', JSON.stringify(carts, null, 2))
  })
  .catch(err => {
    console.log('Error: ', err)
  }); 
  */


  // TEST SCHEMAS ORDER
/* 
Order.find({})
  .then(orders => {
    console.log('Orders: ', JSON.stringify(orders, null, 2))
  })
  .catch(err => {
    console.log('Error: ', err)
  }); 
  */
 
module.exports = mongoose;