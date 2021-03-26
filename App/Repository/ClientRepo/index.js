"use strict";
const SQL_HELPER = require("../SQL");
const Model = require("@model/Clients_model");

class ClientRepo extends SQL_HELPER {
  constructor() {
    super(Model);
  }

  /**
   * Get topic by name
   * @param {String} url
   * @returns Promise
   */
  async getByUrl(url) {
    return await Model.query().where("url", "=", url)
      .then((data) => {
        return data == undefined || data.length == 0
          ? { status: false, data }
          : { status: true, data };
      })
      .catch((err) => {
        return { status: false, err };
      });
  }
}

module.exports = new ClientRepo();
