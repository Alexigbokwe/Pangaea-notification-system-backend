"use strict";
    const Model = require("@elucidate/Model");
    class Topic extends Model{
      static get tableName() {
        return "topics";
      }
    }

    module.exports = Topic;