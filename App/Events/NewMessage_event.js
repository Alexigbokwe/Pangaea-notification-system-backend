"use strict";
let emitter = require("@emitter");
const NewMessageListener = require("@listeners/NewMessage_listener");

class NewMessage {
  /**
   * Create a new event instance.
   * @param {*} params
   */
  constructor(params) {
    this.params = params;
    this.listenOn();
    emitter.emit("NewMessage");
  }

  /**
   * Get the listener to listen to the event.
   */
  async listenOn() {
    new NewMessageListener().handle("NewMessage",this.params)
  }
}

module.exports = NewMessage;
