"use strict";
    const Model = require("@elucidate/Model");
    class Subscription extends Model{
      static get tableName() {
        return "subscriptions";
      }
    }

    module.exports = Subscription;