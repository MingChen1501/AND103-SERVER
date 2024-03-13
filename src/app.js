const express = require('express');
const mongoose = require('./persistence/MongoConnection.js');
const router = require('./route/router.js')
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
