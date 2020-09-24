"use strict";

function getUserInfo(answers = []) {
  let answer = prompt("Type something");

  if (answer === null) {
    return answers;
  }

  answers.push(answer);
  return getUserInfo(answers);
}

const userInfo = getUserInfo();

console.log(userInfo);
