const Skills = require("../db/models/skills.js");
const Jobs = require("../db/models/jobs.js");
const Experiences = require("../db/models/experiences.js");

/* Routes */

const router = {
  
  /* josephpalma.dev/skills routes */
  skills: {
    //GET
    getAll: async (req, res) => {
      try {
        Skills.find({}, function (err, found) {
          if (err) {
            console.log("skills.find({}) error: ", err);
            next(err);
          }
          res.json(found)
        });
      } catch (err) {
        console.log("skills.getAll() error: ", err.message, err);
      }
    }
  },
  /* josephpalma.dev/jobs routes */
  jobs: {
    //GET
    getAll: async (req, res) => {
      try {
        Jobs.find({}, function (err, found) {
          if (err) { 
            console.log("jobs.find({}) error: ", err);
            next(err);
           }
          res.json(found)
        });
      } catch (err) {
        console.log("jobs.getAll() error: ", err.message, err);
      }
    }
  },
  /* josephpalma.dev/experiences routes */
  experiences: {
    //GET
    getAll: async (req, res) => {
      try {
        Experiences.find({}, function (err, found) {
          if (err) { 
            console.log("experiences.find({}) error: ", err);
           }
          res.json(found);
        });
      } catch (err) {
        console.log("experiences.getAll() error: ", err.message, err);
      }
    }
  },
}

module.exports = router;
