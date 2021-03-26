"use strict"
const SQL_HELPER = require("../SQL");
const Model = require("@model/TopicMessage_model");

class MessageRepo extends SQL_HELPER{
   constructor() {
       super(Model)
   }
}

module.exports = new MessageRepo();