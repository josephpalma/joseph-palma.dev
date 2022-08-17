const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  position: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  timeframe: {
    type: String,
    required: true,
    trim: true,
  },
  descriptionOne: {
    type: String,
    trim: true,
    required: false
  },
  descriptionTwo: {
    type: String,
    required: false,
  },
  descriptionThree: {
    type: String,
    required: false,
  },
  latest: {
    type: Number,
    required: true,
    min: 0,
    max: 99
  },
  LogoUri: {
    type: String,
    trim: true,
    lowercase: true,
    required: false
  }
}, {
  collection: "Jobs"
});

let Jobs = mongoose.model("Jobs", JobsSchema); //"assign" SkillsSchema to Skills colelction in mongo

module.exports = Jobs;
