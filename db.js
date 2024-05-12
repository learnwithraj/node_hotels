//connecting mongodb with node js

const mongoose = require("mongoose");
//define the mongodb connection url
const mongoURL = "mongodb://localhost:27017/hotels";

// set up mongodb connection
mongoose.connect(mongoURL);
// ,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// })

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
