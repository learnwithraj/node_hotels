//creating server with express
const express = require("express");
const app = express();
const db = require("./db");
const Person = require("./models/person");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Hello Nepal");
});

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

const menuItemRoutes = require("./routes/menuRoutes");
app.use("/menu", menuItemRoutes);

app.listen(3000, () => {
  console.log("Running ...");
});
