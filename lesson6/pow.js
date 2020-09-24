"use strict";

function pow(number, value) {
  if (value === 0) {
    return 1;
  }

  return number * pow(number, value - 1);
}

pow(5, 4); // 625
pow(5, 3); // 125
pow(5, 2); // 25
pow(5, 1); // 5
pow(5, 0); // 1

console.log(pow(5, 4));
console.log(Math.pow(5, 4));
