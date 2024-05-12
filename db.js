//connecting mongodb with node js

const mongoose = require("mongoose");
require("dotenv").config();
//define the mongodb connection url

// const mongoURL = process.env.LOCAL_MONGODB_URL;
const mongoURL = process.env.MONGODB_URL;
// set up mongodb connection
mongoose.connect(mongoURL);


// get the default connection
const db = mongoose.connection;

//define event listeners for database connection
db.on("connected", () => {
  console.log("connected to Mongobd Server");
});

db.on("error", (err) => {
  console.error("Mongodb connection error", err);
});

db.on("disconnected", () => {
  console.log("Disconnected to server");
});

module.exports = db;
