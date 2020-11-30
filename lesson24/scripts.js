// const timer = setInterval(function () {
//   let test;

//   return function () {
//     const arr = new Array(1000).fill({ a: 1 });

//     test = arr;
//     console.log(test);
//   };
// }, 2000);

// clearInterval(timer);

// const cdFn = function () {
//   // do smth
// };

// let form = document.forms.test;

// form.addEventListener("submit", cdFn);

// form.removeEventListener("submit", cdFn);

// form.remove();

// var theThing = null;

// var replaceThing = function () {
//   var originalThing = theThing;

//   var unused = function () {
//     if (originalThing) console.log("hi");
//   };

//   theThing = {
//     longStr: new Array(1000000).join("*"),
//     someMethod: function () {
//       console.log(someMessage);
//     },
//   };
// };

// setInterval(replaceThing, 1000);

const user1 = {
  name: "Ivan",
  age: 18,
};

const user2 = {
  name: "Alex",
  age: 20,
};

const user3 = {
  name: "Alex",
  age: 20,
};

const s = new Set();

s.add(user1).add(user2).add(user3).delete(user1);
s.add(user1);

// console.log(s);

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("key", "val");
map.set({}, "val2");
map.set(Symbol("test"), "val3");
map.set([1, 2, 3], "val4");
map.set(function () {}, "val4");

// console.log([...map]);

// for (let item of map) {
//   console.log(item);
// }

// map.forEach((a, b, c) => {
//   console.log(a, b, c);
// });

// s.forEach((a, b, c) => {
//   console.log(a, b, c);
// });

// const userCount = new WeakMap();

// userCount.set(user1, 3);

// console.log(userCount);

function* gen() {
  try {
    const a = 1 + 7;
    yield a;
    yield a + 1;
    yield a + 2;
    yield a + 3;
  } catch (e) {
    console.log("test" + e);
  }
}

// const gen1 = function* () {};

const gen1 = gen();

// for (let item of gen1) {
//   console.log(item);
// }

console.log([...gen1]);

// console.log(gen1.next());
// console.log(gen1.throw("Some error"));
// console.log(gen1.next(2));
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
