"use strict";

// const s = Symbol("test symbol");
// const s1 = Symbol("test symbol");

// console.log(s == s1);
// const d = "someKey";

// const obj = {
//   a: 1,
//   b: "dsf",
//   [s]: "test",
//   [d]: "test2",
// };

// console.log(obj, Object.keys(obj));

const obj = {
  a: 1,
  b: 2,
  c: 23,
};

const arr = [3, 42, 346, 5, 7];

console.log(obj, arr);

for (let item in arr) {
  console.log(item);
}

for (let item of arr) {
  console.log(item);
}

for (let item in obj) {
  console.log(obj[item]);
}

// for (let item of obj) {
//   console.log(item);
// }

console.log(arr);

const links = document.getElementsByTagName("a");
const links2 = document.querySelectorAll("a");

console.log(links);

for (let i in links) {
  console.log(i);
}

for (let i of links) {
  console.log(i);
}

function test() {
  return arguments;
}

const t = test(1, 3, 535, 6357, "fds");

for (let i in t) {
  console.log(i);
}

for (let i of t) {
  console.log(i);
}

const arrLike = {
  0: "dsfd",
  1: "dsffdd",
  2: "dsfdsd",
  3: "dasdffd",
  length: 4,
};

console.log(arrLike);

for (let i in arrLike) {
  console.log(i);
}

// for (let i of arrLike) {
//   console.log(i);
// }

console.log(Array.from(arrLike));
// console.log([...arrLike]);

const iter = {
  start: 1,
  end: 12,
  [Symbol.iterator]: function () {
    let current = this.start;

    return {
      next: () => {
        return {
          done: current > this.end,
          value: current++,
        };
      },
    };
  },
};

console.log(iter);

for (let item of iter) {
  console.log(item);
}

console.log(Array.from(iter));
console.log([...iter]);

console.log(links2);

const someObj = {
  f: 6,
  a: 1,
  e: 5,
  b: 2,
  g: 3,
  d: 3.2,
  c: 4,
  [Symbol.iterator]: function () {
    const arr = Object.keys(this).sort();
    let id = 0;

    return {
      next: () => {
        return {
          done: id >= arr.length,
          value: this[arr[id++]],
        };
      },
    };
  },
};

console.log([...someObj]);

// Object.keys();
// Object.values();
const entries = Object.entries(arrLike);

console.log(Object.fromEntries(entries));

console.log(entries.flat());

const mappedEntries = entries.flatMap((item) => {
  return item + "___";
});

console.log(mappedEntries);

document.forms["test-form"].addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e);

  const data = new FormData(e.target);

  // console.log(Object.fromEntries([...data]));
  console.log(Object.fromEntries(data.entries()));
  console.log(data);
});
