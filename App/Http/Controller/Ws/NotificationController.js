"use strict";
const WsBaseController = require("@WsBaseController");

class NotificationController extends WsBaseController {
  constructor(socket) {
    super(socket);
    this.socket = socket;
    console.log(this.socket);
  }

  onMessage(data) {
    // same as: socket.on('message')
    this.socket.emit("message", data);
    console.log(data);
  }

  onClose() {
    // same as: socket.on('close')
  }

  onError() {
    // same as: socket.on('error')
  }
}

module.exports = NotificationController;
