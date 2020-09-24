"use strict";

// const userData = getUserData();
const userData = [
  "true",
  "false",
  "0",
  "-0",
  "Infinity",
  "-Infinity",
  "NaN",
  "null",
  "7",
  "-12",
  "1,12",
  "1.4",
  "-1,14",
  "-1.9",
  "test",
  "test1",
  "0x0df",
  "100",
];
const integerValues = [];
let evenPositiveIntegerElements = 0;
let negativeElements = 0;
let fractionSum = 0;

const scanObj = {
  allValues: userData,
  elements: userData.length,
};

const numberUserData = userData.filter((item) => {
  const value = item.trim();

  return Number(value) === parseFloat(value);
});

numberUserData.forEach((value) => {
  const numberVal = Number(value);

  if (numberVal % 1 === 0) {
    integerValues.push(numberVal);

    if (numberVal > 0 && numberVal % 2 === 0) {
      evenPositiveIntegerElements += 1;
    }
  }

  if (numberVal % 1) {
    fractionSum += numberVal;
  }

  if (numberVal < 0) {
    negativeElements += 1;
  }
});

const integerSum = integerValues.reduce((acc, item) => {
  return acc + item;
}, 0);

const sortedIntegers = integerValues.sort((a, b) => {
  return a - b;
});

if (sortedIntegers.length) {
  scanObj.minInteger = sortedIntegers[0];
  scanObj.maxInteger = sortedIntegers[sortedIntegers.length - 1];
}

if (integerSum) {
  scanObj.arithmeticMean = integerSum / integerValues.length;
}

scanObj.evenPositiveIntegerElements = evenPositiveIntegerElements;
scanObj.negativeElements = negativeElements;
scanObj.fractionSum = fractionSum;

function getUserData() {
  const userAnswers = [];
  let userAnswer;

  do {
    userAnswer = prompt("Type something here:");

    userAnswers.push(userAnswer);
  } while (userAnswer !== null);

  userAnswers.pop();

  return userAnswers;
}

console.log(scanObj);
