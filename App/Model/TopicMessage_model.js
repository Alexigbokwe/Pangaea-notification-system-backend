"use strict";
    const Model = require("@elucidate/Model");
    class Topicmassage extends Model{
      static get tableName() {
        return "topic_massages";
      }
    }

    module.exports = Topicmassage;