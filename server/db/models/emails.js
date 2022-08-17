const mongoose = require("mongoose");

const EncryptedEmailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: String,
    default: Date.now()
  },
  response: {
    type: String,
    required: true,
  },
}, {
  collection: "Emails",
  timestamps: { currentTime: () => new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }) }
});

let Emails = mongoose.model("Emails", EncryptedEmailSchema);

module.exports = Emails;
