"use strict";

const MAX_LENGTH_NUMBER = 6;
const INVALID_OPERATOR_ERROR =
  'Operator is not valid. Only "+" and "*" operators are allowed';
const NO_NULL_OPERATOR_ERROR = "You have to enter an operator";
const INVALID_NUMBER_ERROR = `Number is not valid. It should be an integer and no more than ${MAX_LENGTH_NUMBER} symbols long`;
const REQUIRE_ONE_NUMBER_ERROR = "Require at least one number";

let result;
let currentNumber;
let expression = "";

const getUserData = (text, validationFn, allowNull) => {
  let result;

  do {
    result = prompt(text);

    if (allowNull && result === null) {
      break;
    }
  } while (!validationFn(result));

  return typeof result === "string" ? result.trim() : result;
};

const operatorValidation = (value) => {
  const trimmedVal = (value || "").trim();

  const isValid = trimmedVal === "+" || trimmedVal === "*";

  if (value === null) {
    alert(NO_NULL_OPERATOR_ERROR);
  } else if (!isValid) {
    alert(INVALID_OPERATOR_ERROR);
  }

  return isValid;
};

const numberValidation = (value) => {
  const trimmedVal = (value || "").trim();
  const isValidNumber = parseInt(trimmedVal) === Number(trimmedVal);
  const isValidLength =
    Number(trimmedVal) > 0
      ? trimmedVal.length <= MAX_LENGTH_NUMBER
      : trimmedVal.length <= MAX_LENGTH_NUMBER + 1;

  if (value === null && !expression) {
    alert(REQUIRE_ONE_NUMBER_ERROR);
  } else if (!(isValidNumber && isValidLength)) {
    alert(INVALID_NUMBER_ERROR);
  }

  return isValidNumber && isValidLength;
};

const calculateExpression = (x, y, operator) => {
  const xNum = Number(x);
  const yNum = Number(y);

  switch (operator) {
    case "+":
      return xNum + yNum;
    case "*":
      return xNum * yNum;
  }
};

const operator = getUserData("Please enter operator", operatorValidation);

do {
  currentNumber = getUserData(
    "Please enter a number",
    numberValidation,
    expression
  );

  if (currentNumber === null) {
    continue;
  }

  if (result === undefined) {
    result = +currentNumber;
    expression += currentNumber;
  } else {
    result = calculateExpression(result, currentNumber, operator);
    expression += ` ${operator} ${currentNumber}`;
  }
} while (currentNumber !== null);

alert(`${expression} = ${result}`);
