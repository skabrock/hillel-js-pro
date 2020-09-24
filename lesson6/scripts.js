"use strict";

let arr = [12, true, "test", -Infinity, 0, null, NaN];

// const arr1 = arr.map((item, i) => {
//   console.log(item, i);
//   return item + i;
// });

// console.log(arr, arr1);

const arr2 = arr.filter((item, i) => {
  // if (Number(item) && Number(item) > 1) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return Number(item) && Number(item) > 1;
});

// console.log(arr2);

// const numbers = [4, 1, 4, 75, 4, 11, 17];

// const arr3 = numbers.reduce((acc, item) => {
//   console.log(acc);
//   if (acc) {
//     return acc + " + " + String(item);
//   } else {
//     return String(item);
//   }
// }, "");

// console.log(arr3);

// const numbers = [4, 1, 4, 75, 4, 11, 17];

// const test = numbers.find((item) => {
//   return item % 2 === 0;
// });

// console.log(test);

const numbers = [4, 1, 4, 75, 4, 11, 17];

// const test = numbers.some((item, i) => {
//   // return item % 2 !== 0;
//   return item === 17;
// });

const test = numbers.every((item, i) => {
  // return item % 2 !== 0;
  return item > 0;
});

// console.log(test);

// const filledArr = numbers.fill(17);

// console.log(filledArr);

// numbers.forEach((item, i) => {
//   console.log(String(item).length);
// });

// function sayHi() {
//   console.log("Hi");
//   setTimeout(sayHi, 1000);
// }

// setTimeout();
// setInterval();

// setTimeout(sayHi, 1000);

// setInterval(sayHi, 1000);

// sayHi();
