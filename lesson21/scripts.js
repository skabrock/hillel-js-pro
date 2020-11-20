"use strict";

// console.log(a);
// console.log(b);

function run() {
  try {
    // return;
    console.log(a);
    // console("test");
    // ............return..

    // setTimeout(function () {
    // console.log(a);
    // }, 1);

    // throw new Error("test1");
    // throw new Error("test");

    // throw { a: 1 };
  } catch (error) {
    // console.log("test", error);
    if (error.message === "test") {
      console.dir(error);
    }

    // throw error;
  } finally {
    console.log("finally");
  }

  // console.log(b);
}

console.log("before run");

run();

console.log("after run");

window.onerror = function (message, url, line, col, error) {
  console.log(message);
};

console.log(a);
