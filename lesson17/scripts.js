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

const arr = [1, 2, 3, 4];

// const a = arr[0];
// const b = arr[1];

const [a, b] = arr;

console.log(a, b);

const obj = {
  name: "Name",
  description: {
    body: "body",
    title: "title",
  },
  age: 16,
  test: [1, 2, 3],
};

const {
  name,
  description: { body },
  test: [boo, baz, ...other],
} = obj;

console.log(name, body, other);
