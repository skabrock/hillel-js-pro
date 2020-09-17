"use strict";

// function declaration

function sum(x, y) {
  return x + y;
}

// alert(sum(4, 5));

// function expression

const sum2 = function (x, y) {
  return x + y;
};

// alert(sum2(5, 6));

// const sum3 = function () {
//   let result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   // console.log(arguments.length);
//   // return a + b + c + d + e + f + g;
//   // console.log(a, b, c, d, e, f, g);

//   return result;
// };

// console.log(sum3(1, 2, 3, 4, 5, 6));

// const double = (a) => {
//   console.log("функция double", a);
//   return a ** 2;
// };

// const sum4 = (a, b, callback) => {
//   // console.log(arguments);
//   console.log("функция sum4", a, b, callback);
//   return callback(a + b);
// };

// // console.log(sum4(1, 1, double));
// console.log(sum4(1, 1, double));

// let a = 3;

// const sum5 = function (b) {
//   let a = 5;
//   console.log(a, b);
// };

// sum5(a);

// console.log(a);

const fn = (function (a) {
  return a ** 2;
})(5);

// (function (a) {
//   console.log(a);
//   return a ** 2;
// })(5);

console.log(fn);
