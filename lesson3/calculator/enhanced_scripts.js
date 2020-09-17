"use script";

const AVAILABLE_OPERATORS = ["+", "-", "*", "/", "^", "%"];

function getUserData(title, validationFunction) {
  let result;

  do {
    result = prompt(title).trim();
  } while (!validationFunction(result));

  return result;
}

function operatorValidation(value) {
  return AVAILABLE_OPERATORS.includes(value);
}

function operandValidation(value) {
  const number = Number(value);
  return !isNaN(number) && (number !== Infinity || number !== -Infinity);
}

function getFractional(number) {
  return Number("1e" + (String(number).split(".")[1] || "").length);
}

function calculateExpression(x, y, operator) {
  let result;
  let dividend = 1;

  const FractX = getFractional(x);
  const FractY = getFractional(y);

  switch (operator) {
    case "+":
      dividend = Math.max(FractX, FractY);
      result = (x * dividend + y * dividend) / dividend;
      break;
    case "-":
      dividend = Math.max(FractX, FractY);
      result = (x * dividend - y * dividend) / dividend;
      break;
    case "*":
      dividend = FractX * FractY;
      result = (x * FractX * y * FractY) / dividend;
      break;
    case "/":
      if (y === 0) {
        result = "Error";
        break;
      }
      dividend = FractX * FractY;
      result = (x * FractX) / (y * FractY) / dividend;
      break;
    case "^":
      result = x ** y;
      break;
    case "%":
      if (y === 0) {
        result = "Error";
        break;
      }
      dividend = FractX * FractY;
      result = ((x * FractX) % (y * FractY)) / dividend;
      break;
  }

  return result;
}

const operator = getUserData("Type an operator", operatorValidation);
const firstOperand = +getUserData("Type first operand", operandValidation);
const secondOperand = +getUserData("Type second operand", operandValidation);

const result = calculateExpression(+firstOperand, +secondOperand, operator);

if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
  alert("Number is too big");
} else {
  alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
}
