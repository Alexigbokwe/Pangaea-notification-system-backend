"use strict";
let emitter = require("@emitter");
let socketBox = require("@socketBox");
const SubscriptionRepo = require("../Repository/SubscriptionRepo");

class NewMessage {
  /**
   * Handle the event.
   * @param {*} eventName
   * @param {*} message
   */
  handle(eventName, message) {
    emitter.once(eventName, async () => {
      await this.#getSubscribers(message);
    });
  }

  async #getSubscribers({ topic, data, topic_id }) {
    let subscribers = await SubscriptionRepo.getTopicSubscribers(topic_id);
    if (subscribers.status) {
      try {
        subscribers.data.forEach(() => {
          socketBox.emit("room", "notification");
          socketBox.emit("message", { topic, data });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

module.exports = NewMessage;
