"use strict";

function ChatWithBot(stopWord, messages = []) {
  Chat.call(this, messages);

  this.stopWord = stopWord;
  this.greetingPhrases = ["Hi", "Hello", "Greetings"];
  this.phrases = [
    "May the Force be with you.",
    "There's no place like home.",
    "I'm the king of the world!",
    "Houston, we have a problem.",
    "Elementary, my dear Watson.",
    "It's alive! It's alive!",
    "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    "I'll be back.",
    "You're gonna need a bigger boat.",
    "Here's looking at you, kid.",
    "A martini. Shaken, not stirred.",
    "You talking to me?",
  ];

  this.greeting();
  this.autoStop();
}

ChatWithBot.prototype = Object.create(Chat.prototype);

ChatWithBot.prototype.getRandomGreeting = function () {
  return this.greetingPhrases[random(0, this.greetingPhrases.length - 1)];
};

ChatWithBot.prototype.greeting = function () {
  const message = new Message(this.getRandomGreeting(), "Bot");

  this.send(message);
};

ChatWithBot.prototype.getRandomPhrase = function () {
  return this.phrases[random(0, this.phrases.length - 1)];
};

ChatWithBot.prototype.waitRandomTime = async function () {
  return new Promise((resolve) => {
    this.timer = setTimeout(() => {
      resolve();
    }, random(1000, 8000));
  });
};

ChatWithBot.prototype.answer = async function () {
  const message = new Message(this.getRandomPhrase(), "Bot");

  await this.waitRandomTime();

  this.send(message);
};

ChatWithBot.prototype.say = function (message) {
  clearTimeout(this.timer);

  if (message.text === this.stopWord) {
    this.disable();
  }

  this.send(message);
  this.answer();
};

ChatWithBot.prototype.autoStop = function () {
  const id = setInterval(() => {
    if (random(0, 10000) === 42) {
      this.disable();

      if (!this.enabled) {
        clearInterval(id);
      }
    }
  }, 100);
};
