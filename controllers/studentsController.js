const express = require("express");
const controller = express.Router();
const studentData = require("../studentData.json");

controller.get("/", (request, response) => {
  console.log("GET to students");
  response.json(studentData);
});

controller.get("/:id", (request, response) => {
  try {
    let { id } = request.params;
    console.log(`GET to students/${id}`);
    let target = studentData.students.find((student) => student.id === id);
    if (target) {
      response.json(target);
    } else {
      response.send("Student not found");
    }
  } catch (err) {
    response.status(500).send("An error occurred");
  }
});

module.exports = controller;
