"use strict";
const FormRequest = require("@elucidate/FormRequest");

class Topic extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate(data) {
    return await this.make(data, {
      name: "required|string",
    });
  }
}

module.exports = new Topic();
