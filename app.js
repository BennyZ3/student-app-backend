// dependencies
const express = require("express");

// initialize
const app = express();

const studentController = require("./controllers/studentsController");

const namesController = require("./controllers/namesController");

app.use("/students", studentController);
app.use("/names", namesController);

// route
app.get("/", (request, response) => {
  response.send("Hello World");
});

module.exports = app;
