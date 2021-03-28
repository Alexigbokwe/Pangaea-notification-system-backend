"use strict";
const SubscriptionRepo = require("../../Repository/SubscriptionRepo");

class SubscriptionService {
  constructor({ TopicService, ClientService }) {
    this._topicService = TopicService;
    this._clientService = ClientService;
  }

  async getSubscribers(topic_id) {
    return await SubscriptionRepo.getTopicSubscribers(topic_id);
  }

  async subscribeUser(topic, url) {
    return await new Promise(async (resolve, reject) => {
      let checkTopicResult = await this.#checkTopic(topic);
      if (checkTopicResult.status) {
          let checkClientResult = await this.#checkClient(url);
        checkClientResult.status
          ? this.saveATopic(checkClientResult.data.id, checkTopicResult.data.id)
              .then(() => resolve({ url, topic }))
              .catch((err) => {
                reject(err);
              })
          : reject("Invalide client");
      } else {
        reject("Selected topic does not exist");
      }
    });
  }

  async #checkTopic(name) {
    return await this._topicService
      .getTopicByName(name)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async #checkClient(url) {
    return await this._clientService
      .getClientByUrl(url)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }
  /**
   * Save user subscriiption
   * @param {Integer} client_id
   * @param {Integer} topic_id
   * @returns Promise
   */
  async saveATopic(client_id, topic_id) {
    return await new Promise(async (resolve, reject) => {
      let result = await SubscriptionRepo.saveOne({ client_id, topic_id });
      result.status ? resolve(result.data) : reject(result.data);
    });
  }
}

module.exports = SubscriptionService;
