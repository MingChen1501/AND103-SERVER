const express = require('express');
const router = require('./route')
const bodyParser = require('body-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
require('./config')
const productService = require('./service/ProductService.js');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);
// const users = [
//   {
//     id: 1,
//     username: 'admin',
//     password: 'admin',
//   },
//   {
//     id: 2,
//     username: 'user',
//     password: 'user',
//   },
// ]
// const secret = 'secret';
// const public = 'public';
// const createJWT = (user) => {
//   return jwt.sign({ user }, secret, { expiresIn: '15m' });
// }
// const verifyJWT = (req, res, next) => {
//   console.log(req.headers);
//   const token = req.headers['authorization']?.split(' ')[1];
//   console.log(token);
//   if (!token) {
//     res.status(401).send('Unauthorized');
//   } else {
//     jwt.verify(token, secret, (err, decoded) => {
//       if (err) {
//         res.status(401).send('Unauthorized');
//       } else {
//         req.user = decoded.user;
//         next();
//       }
//     });
//   }
// }
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(u => u.username === username && u.password === password);
//   if (user) {
//     const token = createJWT(user);
//     res.status(200).json({ token });
//   } else {
//     res.status(401).send('Unauthorized');
//   }
// }
// );
// app.get('/public',verifyJWT, (req, res) => {
//   res.status(200).send('success');
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'storage/images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// app.get('/upload', (req, res) => {
//   res.render(__dirname + '/views/upload');
// });
// app.post('/upload',upload.single('image'), (req, res) => {
//   res.send('Uploaded');
// });


// const mailConent = {
//   from: 'tminh400@gmail.com',
//   to: 'tminh4000@gmail.com',
//   subject: 'Test Nodemailer',
//   text: 'Hello from nodemailer',
// };
// mailer.sendMail(mailConent, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
