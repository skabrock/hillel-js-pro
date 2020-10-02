"use strict";

const makeDivider = (defaultDivisor = 1) => {
  let result = defaultDivisor;

  return function (dividend) {
    return (result = dividend / Math.round(result));
  };
};

const divider = makeDivider(2);

// console.log(divider(2));
console.log(divider(1));
console.log(divider(7));
console.log(divider(70));
console.log(divider(2));
