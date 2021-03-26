"use strict";
const SQL_HELPER = require("../SQL");
const Model = require("@model/Subscriptions_model");

class SubscriptionRepo extends SQL_HELPER {
  constructor() {
    super(Model);
  }
}

module.exports = new SubscriptionRepo();
