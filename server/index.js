const express = require('express');
const compression = require('compression');
const cors = require("cors");
const app = express();
const helmet = require('helmet');
const router = require("./router/routes.js");
const emailRouter = require("./router/emails.js");
const mongo = require("./db/connections/mongo.js");

/* Middleware */
app.use(cors());
app.use(express.json()); 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(compression()); //Compress all routes
app.use(express.static(__dirname + '/client')); //front end landing

/* Routing */
app.get('/_ah/warmup', (res) => {
  res.send("Loading...");
});

mongo ? app.get("/skills", router.skills.getAll) : console.log("Database connection failed! ❌");

mongo ? app.get("/jobs", router.jobs.getAll) : console.log("Database connection failed! ❌");

mongo ? app.get("/experiences", router.experiences.getAll) : console.log("Database connection failed! ❌");

mongo ? app.get("/about", router.about.getAll) : console.log("Database connection failed! ❌");

mongo ? app.get("/outboundEmailRequests/:id", emailRouter.email.getOne) : console.log("Database connection failed! ❌");

app.post("/outboundEmailRequests", (req, res) => {
  emailRouter.email.postEmail(req, res);
});

//test more content route
if (!process.env.NODE_ENV) {
  const moreContentTest = "./static/MANDADashMoreContent.html";
  app.get("/moreContentTesting", (req, res) => {
    res.sendFile(moreContentTest, { root: __dirname });
  })
}

//static routes
app.use("/portAirfieldDataPoints", express.static(__dirname + '/static/portAirfieldDataPoints.html')); 
//cover api routes from front end
app.use("/skills", express.static(__dirname + '/client'));
app.use("/jobs", express.static(__dirname + '/client'));
app.use("/experiences", express.static(__dirname + '/client'));
app.use("/about", express.static(__dirname + '/client'));

let HOST = "";
const PORT = process.env.PORT || 8080;
let DB = mongo ? "succesfully connected" : "❌ connection failed! ❌";
const event = new Date(Date.now());
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
try {
  const server = app.listen(PORT, () => {
    server.address().address == "::" ? HOST = "localhost" : HOST = server.address().address;
    console.log(`
      ##################################################
      🛡️  Server listening on http://${HOST}:${PORT} 🛡️
      ##################################################
      📖 MongoDB database ${DB} 📖
      ##################################################
      ⌛ Up on ${event.toLocaleString('en-us', dateOptions)} ⌛
      ##################################################
    `);
  });
} catch (err) {
  console.log("Error starting server", "@", new Date(Date.now()), ": \n", err)
}

module.exports = app;
