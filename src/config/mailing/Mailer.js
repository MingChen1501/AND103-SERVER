const nodemailer = require('nodemailer');

const service = process.env.MAILER_SERVICE;
const user = process.env.MAILER_AUTH_USER;
const appPassword = process.env.MAILER_AUTH_APP_PASSWORD;
const mailTransport = nodemailer.createTransport({
  service: service,
  auth: {
    user: user,
    pass: appPassword,
  },
});

module.exports = mailTransport;