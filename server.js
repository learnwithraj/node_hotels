//creating server with express
const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const MenuItem = require("./models/MenuItem");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello Nepal");
});

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

const menuItemRoutes = require("./routes/menuRoutes");
app.use("/menu", menuItemRoutes);

app.listen(PORT, () => {
  console.log("Running ...");
});
