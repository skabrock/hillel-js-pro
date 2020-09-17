"use strict";

const operators = ["+", "-", "/", "*", "**"];

const operator = prompt("type an operator").trim();

// alert(operator.length <= 2 && operators.indexOf(operator) !== -1);
// alert(operators.indexOf(operator) !== -1);
alert(operators.includes(operator));

// const operator = prompt("type an operator").trim();

// alert(
//   operator === "+" || operator === "-" || operator === "*" || operator === "/"
// );
