"use strict";

const button = document.querySelector("button");

// console.log("Test 1");

// button.addEventListener("click", () => {
//   console.log("Test 2");
// });

// console.log("Test 3");

// setTimeout(() => {
//   console.log("test");
// }, 0);

// console.log("test2");

// function a(str) {
//   return b(str);
// }

// function b(str) {
//   return c(str);
// }

// function c(str) {
//   console.log(str);
//   throw Error("error1");
// }

// a("test");

// // call stack
// // LIFO last in first out

// console.log();
// c();
// b();
// a();
// main();

// setTimeout(
//   (a, b, c, d) => {
//     console.log("test", a, b, c, d);
//   },
//   0,
//   1,
//   2,
//   3,
//   4,
//   5
// );

// setInterval(() => {
//   console.log("test");
// }, 1000);

// setTimeout(() => {
//   // alert("qwer");
//   // for (let i = 0; i < 1000; i++) {
//   //   console.log("loop");
//   // }

//   function r() {
//     r();
//   }

//   r();
// }, 3000);

// button.addEventListener("click", () => {
//   console.log("Test");
// });

// setInterval(() => {
//   console.log("1");
// }, 100);

// var i;
// console.log(i);
for (var i = 0; i <= 9; i++) {
  let t = i;
  setTimeout(function () {
    console.log(t);
  }, 0);
}
// console.log(i);
