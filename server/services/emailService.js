const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' });
const EncryptedEmails = require("../db/models/emails.js");
const handlebars = require('handlebars');
const fs = require('fs');
const SimpleCrypto = require('simple-crypto-js').default;
const crypt = new SimpleCrypto(process.env.cryptoKey);
const event = new Date(Date.now());
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
const path = require('path');

const readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
    if (err) {
      callback(err);
      throw err;
    }
    else { callback(null, html); }
  });
};

const storeEmail = function (body, info) {
  let encryptedRecord = {
    name: crypt.encrypt(body.name),
    email: crypt.encrypt(body.email),
    subject: crypt.encrypt(body.subject),
    message: crypt.encrypt(body.message),
    response: info.response,
    timestamp: event.toLocaleString('en-us', dateOptions)
  }
  EncryptedEmails.create(encryptedRecord, function (err, result) {
    err ? console.log("email.create({}) error: ", err) : null;
    return result;
  });
}

const sendEmail = async function (body) {
  const transporter = nodemailer.createTransport({
    service: process.env.emailService,
    auth: {
      user: process.env.emailUser,
      pass: process.env.emailPass,
    }
  });

  readHTMLFile(path.join(__dirname, `..`, `static`, `emailTemplate.html`), function (err, html) {
    if (err) {
      console.log("email service, readHTML() error: ", err);
      throw err;
    }
    let template = handlebars.compile(html);
    let replacements = {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      time: event.toLocaleString('en-us', dateOptions)
    };
    let htmlToSend = template(replacements);

    const options = {
      from: process.env.emailUser,
      to: process.env.emailPass,
      subject: 'Inquiry from josephpalma.dev',
      html: htmlToSend
    }

    transporter.sendMail(options, async (err, info) => {
      if (err) {
        console.log("email service, sendMail() error: ", err.message, err);
        return;
      } else {
        await storeEmail(body, info);
      }
    });
  });
}

module.exports = { sendEmail };