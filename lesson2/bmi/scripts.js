"use strict";

const USER_DEFAULT_WEIGHT = 70;
const USER_DEFAULT_HEIGHT = 180;

const userWeight = +prompt("Type your weight (kg)", USER_DEFAULT_WEIGHT);
const userHeight = Number(prompt("Type your height (cm)", USER_DEFAULT_HEIGHT));

const weightNumber = userWeight || USER_DEFAULT_WEIGHT;
const heightNumber = (userHeight || USER_DEFAULT_HEIGHT) / 100;

function calculateBmi(weightNumber, heightNumber) {
  return weightNumber / heightNumber ** 2; // Math.pow(heightNumber, 2)
}

alert(calculateBmi(weightNumber, heightNumber));
