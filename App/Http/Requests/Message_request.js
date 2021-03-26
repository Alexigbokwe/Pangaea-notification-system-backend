"use strict";
const FormRequest = require("@elucidate/FormRequest");

class Message extends FormRequest {
  /**
   * Handle the request validation.
   * @param {*} data | e.g request body
   */
  async validate(data) {
    return await this.make(data, {
      message: "required|string",
    });
  }
}

module.exports = new Message();
