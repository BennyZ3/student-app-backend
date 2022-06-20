const express = require("express");
const controller = express.Router();
const studentData = require("../studentData.json");
const {
  stringRepeaterWithSpace,
  capitalizeFirst,
} = require("../utils/stringUtils");

controller.get("/capitalize/:name/", (request, response) => {
  try {
    //get name, times
    const { name } = request.params;
    //get result of repeater
    let result = capitalizeFirst(name);
    response.send(result);
  } catch (err) {
    response.send("There was an error");
  }
});

controller.get("/:name/:times", (request, response) => {
  try {
    //get name, times
    const { name, times } = request.params;
    //get result of repeater
    let result = stringRepeaterWithSpace(name, times);
    response.send(result);
  } catch (err) {
    response.send("There was an error");
  }
});

module.exports = controller;
