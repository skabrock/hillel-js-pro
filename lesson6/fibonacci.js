"use strict";

const fibonacci = (length) => {
  if (length === 1) {
    return [0, 1];
  }

  const res = fibonacci(length - 1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  return res;
};

console.log(fibonacci(5));
