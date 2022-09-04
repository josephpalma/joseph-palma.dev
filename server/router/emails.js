const EncryptedEmails = require("../db/models/emails.js");
const emailService = require("../services/emailService.js");
const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../.env' });
const SimpleCrypto = require('simple-crypto-js').default;
const crypt = new SimpleCrypto(process.env.cryptoKey);

const emailRouter = {
  
  /* josephpalma.dev/outboundEmailRequests routes */
  email: {
    postEmail: async (req, res) => {
      const outboundEmail = {
        name: crypt.decrypt(req.body.body.name),
        email: crypt.decrypt(req.body.body.email),
        subject: crypt.decrypt(req.body.body.subject),
        message: crypt.decrypt(req.body.body.message),
      }
      try {
        await emailService.sendEmail(outboundEmail);
        res.status(201).json('email successfully sent');
      } catch (err) {
        console.log("email.post() error: ", err.message, err);
        res.status(301).json('email could not be sent');
      }
    },
    //take objectID and find by id, return unencrypted email record
    getOne: async (req, res) => {
      try {
        EncryptedEmails.findById(req.params.id, function (err, found) {
          if (err) {
            console.log("emails.find({}) error: ", err);
          }
          let unencryptedEmail = {
            name: crypt.decrypt(found.name),
            email: crypt.decrypt(found.email),
            subject: crypt.decrypt(found.subject),
            message: crypt.decrypt(found.message)
          }
          res.json(unencryptedEmail);
        });
      } catch (err) {
        console.log("email.findById() error: ", err.message, err);
      }
    },
  }
}

module.exports = emailRouter;