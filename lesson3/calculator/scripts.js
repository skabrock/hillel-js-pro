"use script";

const AVAILABLE_OPERATORS = "+-*/^%";

function getUserData(title, validationFunction, defaultText = "") {
  let result;

  do {
    result = (prompt(title, defaultText) || "").trim();
  } while (!validationFunction(result));

  return result;
}

function operatorValidation(value) {
  return value.length === 1 && AVAILABLE_OPERATORS.indexOf(value) !== -1;
}

function operandValidation(value) {
  const numberValue = Number(value);
  return !isNaN(numberValue);
}

function calculateExpression(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "^":
      return x ** y;
    case "%":
      return x % y;
  }
}

const operator = getUserData("Type an operator", operatorValidation, "+");
const firstOperand = +getUserData("Type first operand", operandValidation);
const secondOperand = +getUserData("Type second operand", operandValidation);

const result = calculateExpression(firstOperand, secondOperand, operator);

alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);
