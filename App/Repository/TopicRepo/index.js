"use strict";
const SQL_HELPER = require("../SQL");
const TopicModel = require("@model/Topics_model");

class TopicRepo extends SQL_HELPER {
  constructor() {
    super(TopicModel);
  }
}

module.exports = new TopicRepo();
