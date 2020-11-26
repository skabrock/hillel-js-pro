"use strict";

const Message = (function () {
  let id = 0;

  return function (text, from = "User") {
    this.text = text;
    this.from = from;
    this.date = new Date();
    this.id = id++;
  };
})();

Message.getUI = function (message) {
  const msg = document.createElement("div");
  msg.classList.add("message");

  const body = document.createElement("div");
  body.classList.add("body");

  if (message.from === "User") {
    body.classList.add("self");
  }

  body.innerHTML = message.text;

  msg.append(body);
  return msg;
};
