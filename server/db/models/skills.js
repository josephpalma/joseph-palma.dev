const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema({
  name: {
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
  type: {
    type: String,
    required: false,
    trim: true,
    enum: ["Technology", "Framework"]
  },
  logoUri: {
    type: String,
    trim: true,
    lowercase: true,
    required: false
  },
  level: {
    type: Number,
    required: true,
    max: 100,
    min: 0
  },
  fontSize: {
    type: Number,
    required: false,
  }
}, {
  collection: "Skills"
});

let Skills = mongoose.model("Skills", SkillsSchema); //"assign" SkillsSchema to Skills colelction in mongo

module.exports = Skills;
