const express = require("express");
const controller = express.Router();
const studentData = require("../studentData.json");

controller.get("/", (request, response) => {
  // how to handle query string
  // how to change student data accodingly
  let { limit = 25 } = request.query;
  limit = Number(limit);
  let studentDataForDelivery = { ...studentData };
  studentDataForDelivery.students = studentDataForDelivery.students.slice(
    0,
    limit
  );
  console.log("GET to students");
  response.json(studentDataForDelivery);
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
