"use strict";

const url = "wss://echo.websocket.org";

const ws = new WebSocket(url);

ws.onopen = function () {
  console.log("CONNECTED");
};

ws.onmessage = function (message) {
  console.log(message.data);
  // console.log(JSON.parse(message.data));
};

ws.onerror = function (res) {
  console.log(res);
};

ws.onclose = function () {
  console.log("DISCONNECTED");
};

document
  .getElementsByTagName("button")[0]
  .addEventListener("click", function () {
    console.log("clicked");

    ws.send(document.getElementsByTagName("input")[0].value);
  });
