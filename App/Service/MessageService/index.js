"use strict";
const MessageRepository = require("../../Repository/MessageRepo");
const TopicModel = require("@model/Topics_model");
const NewMessageEvent = require("@events/NewMessage_event");


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
        if (topicName.trim() === element.name) {
          let saveData = await MessageRepository.saveOne({ topic_id:element.id, message });
          if (saveData.status) {
            await new NewMessageEvent({topic:topicName,data:message,topic_id:element.id})
            resolve(saveData.data);
          } else {
            reject(saveData.data);
          }
          break;
        }
      }
    });
  }
}

module.exports = MessageService;
