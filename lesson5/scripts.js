"use strict";

// const arr = [];
// let answer;
// let result = 1;

// while (answer !== null) {
//   answer = prompt("Type something");

//   if (answer !== null) {
//     arr.push(answer);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   result *= Number(arr[i]);
// }

// // alert(arr);
// // console.log(arr);
// console.log(result);

let answer;
const arr = [];
const arr2 = [];

while (answer !== null) {
  answer = prompt("Type something");

  if (answer !== null) {
    arr.push(answer);
  }
}

for (let i = 0; i < arr.length; i++) {
  const value = arr[i];
  if (!isNaN(value)) {
    arr2.push(value);
  }
}

console.log(arr);
console.log(arr2);
