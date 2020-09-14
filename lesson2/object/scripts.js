"use strict";

const userInfo = {
  name: prompt("Type your username"),
  age: prompt("Type you age"),
  jobTitle: prompt("Type your job title"),
};

alert(
  `Your name is ${userInfo.name}, you are a ${userInfo.jobTitle}. Your age is ${userInfo.age} years`
);
