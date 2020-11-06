"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

// babel scripts.js --out-file scripts-babel.js --watch

// const a = [1, 2, 3];

// let b = 4;

// const c = 5;

// let d = 6;

// console.log(i);
// let i = 0;

// for (i = 0; i < 5; i++) {}

// const fn1 = function (a = 5) {
//   return a * a;
// };

// console.log(fn1());

// const fn2 = (a = 5) => a * a;

// const fn2 = (a = 5) => ({ a: a });

// console.log(fn2());

// (() => {
//   console.log("self executing function");
// })();

// const a = 10;

// console.log(`Test ${a}`);

// const fn3 = (a, ...props) => props;

// console.log(fn3(1, 2, 3));

// // const obj = {
//   a: "a",
//   b: "b",
//   c: "c",
//   d: "d",
//   e: "e",
// };

// const obj

// function fn4(a, b, c, ...rest) {
//   console.log(a, b, c, rest);
// }

// const arr = [1, 2, 3, 4];
// fn4(0, ...arr);

var arr = [1, 2, 3, 4];

// const a = arr[0];
// const b = arr[1];

var a = arr[0],
    b = arr[1];


console.log(a, b);

var obj = {
  name: "Name",
  description: {
    body: "body",
    title: "title"
  },
  age: 16,
  test: [1, 2, 3]
};

var name = obj.name,
    body = obj.description.body,
    _obj$test = _toArray(obj.test),
    boo = _obj$test[0],
    baz = _obj$test[1],
    other = _obj$test.slice(2);

console.log(name, body, other);
