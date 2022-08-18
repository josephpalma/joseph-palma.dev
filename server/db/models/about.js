const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  intro: {
    type: String,
    required: true,
    trim: true
  },
  experience: {
    type: String,
    required: true,
    trim: true
  },
  skills: {
    type: String,
    required: true,
    trim: true
  },
  interests: {
    type: String,
    required: true,
    trim: true
  },
}, {
  collection: "About"
});

let About = mongoose.model("About", AboutSchema);

module.exports = About;
