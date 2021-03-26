"use strict";
const Model = require("@elucidate/Model");
class Notification extends Model {
  static get tableName() {
    return "notifications";
  }
}

module.exports = Notification;
