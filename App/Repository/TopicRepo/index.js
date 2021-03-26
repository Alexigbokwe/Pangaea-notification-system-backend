"use strict";
const SQL_HELPER = require("../SQL");
const Model = require("@model/Topics_model");

class TopicRepo extends SQL_HELPER {
  constructor() {
    super(Model);
  }
    /**
     * Get topic by name
     * @param {String} name 
     * @returns Promise
     */
    async getByName(name) {
        return await Model.query().where("name", "=", name).then(data => {
            return data == undefined || data.length == 0? {status:false,data}:{status:true,data};
        }).catch(err => {
            return {status:false,err};
        })
    }
}

module.exports = new TopicRepo();
