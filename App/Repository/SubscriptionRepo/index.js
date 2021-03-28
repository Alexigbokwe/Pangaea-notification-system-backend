"use strict";
const SQL_HELPER = require("../SQL");
const Model = require("@model/Subscriptions_model");

class SubscriptionRepo extends SQL_HELPER {
  constructor() {
    super(Model);
  }

  async getTopicSubscribers(topic_id) {
    return await Model.query().where('topic_id', '=', topic_id).then(data => {
      return {status:true,data}
    }).catch(err => {
      return {status:false,data:err}
    })
  }
}

module.exports = new SubscriptionRepo();
