"use strict";

const STOP_WORD = "red";

const messageContainer = document.getElementById("messages-area");

const sillyChat = new ChatWithBot(STOP_WORD);

function renderMessage(text) {
  messageContainer.append(Message.getUI(text));
}

sillyChat.messages.forEach(renderMessage);

sillyChat.onMessageAdded = (message) => {
  renderMessage(message);
};

sillyChat.onDisable = () => {
  const chatDisabled = document.createElement("div");
  chatDisabled.className = "disabled-message";
  chatDisabled.innerHTML = "Chat has been disabled, please reload the page";

  messageContainer.append(chatDisabled);
};

document.forms.chat.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(this);
  console.log([...data]);
  const message = new Message([...data.values()][0]);

  sillyChat.say(message);

  this.reset();
});
