"use strict";

function Chat(messages = []) {
  this.messages = messages;
  this.enabled = true;
}

Chat.prototype.send = function (message) {
  if (!this.enabled) {
    return;
  }

  this.messages.push(message);

  if (typeof this.onMessageAdded === "function") {
    this.onMessageAdded(message);
  }
};

Chat.prototype.disable = function (text) {
  if (!this.enabled) return;

  this.enabled = false;

  if (typeof this.onDisable === "function") {
    this.onDisable();
  }
};
