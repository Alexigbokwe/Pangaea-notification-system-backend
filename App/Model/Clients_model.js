"use strict";
    const Model = require("@elucidate/Model");
    class Clients extends Model{
      static get tableName() {
        return "clients";
      }
    }

    module.exports = Clients;