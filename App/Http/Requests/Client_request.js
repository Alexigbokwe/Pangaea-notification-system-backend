"use strict";
const FormRequest = require("@elucidate/FormRequest");

class Client extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate(data) {
    return await this.make(data, {
      url: "required|url",
    });
  }
}

module.exports = new Client();
