const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/../../.env' });
const mongoose = require("mongoose");
const uri = process.env.dbUri;
let connection = false;

const pingDatabase = async (req, res) => {
  mongoose.connect(uri, { ssl: true }).then(
    () => { return true; },
    err => {
      console.log("Mongo: Error connecting to db: ", err)
      return false;
    }
  );
};

const connect = async () => {
  return await pingDatabase();
};

connection = connect();

module.exports = connection;
