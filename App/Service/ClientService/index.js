"use strict";
const ClientRepository = require("../../Repository/ClientRepo");

class ClientService {
  /**
   * Get all clients
   * @returns Promise
   */
  async getAllClients() {
    return await new Promise(async (resolve, reject) => {
      let result = await ClientRepository.getAll(["id", "DESC"]);
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Get a specific client
   * @param {integer} id
   * @returns Promise
   */
  async getAClient(id) {
    return await new Promise(async (resolve, reject) => {
      let result = await ClientRepository.findById(id);
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Get a specific client by url
   * @param {String} url
   * @returns Promise
   */
  async getClientByUrl(url) {
    return await new Promise(async (resolve, reject) => {
      let result = await ClientRepository.getByUrl(url);
      result.status
        ? resolve({ status: true, data: result.data[0] })
        : reject({ status: false, data: result.data });
    });
  }

  /**
   * Update a Client
   * @param {integer} id
   * @param {String} url
   * @returns Promise
   */
  async updateAClient(id, url) {
    return await new Promise(async (resolve, reject) => {
      let result = await ClientRepository.updateOne(id, { url });
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Save a Client
   * @param {String} url
   * @returns Promise
   */
    async saveAClient(url) {
    return await new Promise(async (resolve, reject) => {
      let result = await ClientRepository.saveOne({ url });
      result.status ? resolve(result.data) : reject(result.data);
    });
  }

  /**
   * Remove a Client from storage
   * @param {integer} id
   * @returns Promise
   */
  async removeAClient(id) {
    return await new Promise(async (resolve, reject) => {
      let check = await ClientRepository.findById(id);
      if (check.status) {
        let result = await ClientRepository.deleteOne(id);
        result.status
          ? resolve("Client successfully removed")
          : reject(result.data);
      } else {
        reject(check.data);
      }
    });
  }
}

module.exports = ClientService;
