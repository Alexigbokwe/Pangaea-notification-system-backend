"use strict";
const TopicRepository = require("../../Repository/TopicRepo");

class TopicService {
  /**
   * Get all topics
   * @returns Promise
   */
  async getAllTopics() {
    return await new Promise(async (resolve, reject) => {
      let result = await TopicRepository.getAll(["id", "DESC"]);
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Get a specific topic by Id
   * @param {Integer} id
   * @returns Promise
   */
  async getATopic(id) {
    return await new Promise(async (resolve, reject) => {
      let result = await TopicRepository.findById(id);
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Get a specific topic by Name
   * @param {String} name
   * @returns Promise
   */
  async getTopicByName(name) {
    return await new Promise(async (resolve, reject) => {
      let topicName = name.toLowerCase();
      let result = await TopicRepository.getByName(topicName);
      result.status ? resolve({ status: true, data: result.data[0] }) : reject({ status: false, data:result.data });
    });
  }

  /**
   * Update a topic
   * @param {Integer} id
   * @param {String} name
   * @returns Promise
   */
  async updateATopic(id, name) {
    return await new Promise(async (resolve, reject) => {
      let record = name.toLowerCase();
      let result = await TopicRepository.updateOne(id, { name: record });
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Save a topic
   * @param {String} name
   * @returns Promise
   */
  async saveATopic(name) {
    return await new Promise(async (resolve, reject) => {
      let record = name.toLowerCase();
      let result = await TopicRepository.saveOne({ name: record });
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Remove a topic from storage
   * @param {integer} id
   * @returns Promise
   */
  async removeATopic(id) {
    return await new Promise(async (resolve, reject) => {
      let check = await TopicRepository.findById(id);
      if (check.status) {
        let result = await TopicRepository.deleteOne(id);
        result.status
          ? resolve("Topic successfully removed")
          : reject(result.data);
      } else {
        reject(check.data);
      }
    });
  }
}

module.exports = TopicService;
