"use strict";
const MessageRepository = require("../../Repository/MessageRepo");
const TopicModel = require("@model/Topics_model");

class MessageService {
  /**
   * Save massage to a topic
   * @param {String} topicName
   * @param {String} message
   * @returns Promise
   */
  async publishToTopic(topicName, message) {
    return await new Promise(async (resolve, reject) => {
      let record = await TopicModel.query();
      for (let element of record) {
        if (topicName.localeCompare(element.name)) {
          let saveData = await MessageRepository.saveOne({ topic_id:element.id, message });
          saveData.status ? resolve(saveData.data) : reject(saveData.data);
          break;
        }
      }
    });
  }
}

module.exports = MessageService;
