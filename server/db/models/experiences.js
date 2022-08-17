const mongoose = require("mongoose");

const ExperiencesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  order: {
    type: Number,
    required: true,
    min: 0,
    max: 99
  },
  stakeholders: {
    type: [String],
    required: false,
    index: true
  },
  links: {
    type: Array,
    index: true,
    required: false
  },
  technologies: {
    type: [String],
    index: true,
    required: true
  },
  technicalDescription: {
    type: String,
    required: false,
    trim: true,
    min: 1
  },
  userDescription: {
    type: String,
    required: false,
    trim: true,
    min: 1
  },
  photo: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
}, {
  collection: "Experiences"
});

let Experiences = mongoose.model("Experiences", ExperiencesSchema);

module.exports = Experiences;
