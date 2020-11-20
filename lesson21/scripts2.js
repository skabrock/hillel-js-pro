"use strict";

// const pr = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve(123);
//   }, 2000);
// });

// const req = fetch("http://swapi.dev/api/planets/1/");

// async function fn() {
//   const result1 = await pr;

//   const result2 = await req;

//   return { result1, result2 };
// }

// console.log(fn());

// async function run() {
//   console.log(await fn());
// }

// fn().then((value) => {
//   console.log(value);
// });

// run();

// async function fn() {
//   return 42;
// }

// async function run() {
//   console.log("start");
//   console.log(await fn());
//   console.log("finish");
// }

// run();

// setTimeout(function () {
//   console.log(1);
// }, 0);

// (async function fn() {
//   return 2;
// })().then((value) => {
//   console.log(value);
// });

// const promise = Promise.resolve();

// promise.then(() => {
//   console.log(3);
// });

// console.log(4);

// async function fn() {
//   if (confirm("resolve?")) {
//     return "resolved";
//   } else {
//     throw new Error("rejected");
//   }
// }

// async function run() {
//   try {
//     const result = await fn();

//     console.log(result);

//     // fn()
//     //   .then((value) => {
//     //     console.log("test");
//     //   })
//     //   .catch(() => {
//     //     console.log("catch");
//     //   });
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

// async function getData() {
//   const result = await fetch("http://swapi.dev/api/planets/1/");

//   return await result.json();
// }

// async function run() {
//   console.log(await getData());
// }

// run();

// async function run() {
//   console.log(await (await fetch("http://swapi.dev/api/planets/1/")).json());
// }

// run();

// function timeout(message, time = 0) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(message), time * 1000);
//   });
// }
// function random(min, max) {
//   return Math.round(Math.random() * (max - min + 1)) + min;
// }
// async function randomMessage() {
//   const message = ["Hi!", "How are you?", "Are you ok?"][random(0, 2)]; // 0, 1, 2
//   return timeout(message, 3);
// }
// async function chat() {
//   const message = await randomMessage();
//   console.log(message);
// }
// console.log("--- start ---");
// chat().then(() => console.log("--- end ---"));
