// "use strict";

// // console.log("test");
// var a = 1;
// let e = 1;
// const f = 1;
// window.b = 2;
// // c = 3;

// console.log(window);
// console.log(window.a, window.b);
// console.log(window.e, window.f);

// window.global = 0;

// let a = 1;

// function fn() {
//   let b = 2;
//   console.log(a + b);
// }

// fn();

// function getCounter(val) {
//   let count = val || 0;

//   return function (title = "") {
//     return `${title} ${++count}`;
//   };
// }

// const counter = getCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2

// const counter2 = counter;

// // console.log(counter2("result is: ")); // 1
// console.log(counter2()); // 2

// function getSum() {
//   let value = 0;

//   return function (number = 1) {
//     value = value + number;

//     return value;
//   };
// }

// const fn = getSum();

// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn());
// console.log(fn(3));
// console.log(fn());
// console.log(fn());
// console.log(fn());

// console.log(this);
// // console.log(window);

// function test() {
//   console.log(this);
// }

// test();

// function someFn() {
//   console.log(this); // window
//   console.log(this.date); // undefined
//   console.log(date);
// }

// someFn();
// var date = "28.09";

// const user = {
//   name: "Kirk Hammett",
//   sayHello: function () {
//     // console.log(this);
//     console.log("Hello, " + this.name);
//   },
// };

// const user1 = {
//   name: "Ivan",
// };

// // sayHello();

// user.sayHello(); // “Hello, Kirk Hammett"
// user.sayHello(); // “Hello, Kirk Hammett"

// user.sayHello("Mr."); // "Hello, Mr.Kirk Hammett!"
// user.sayHello.call(user2, "Mrs."); // "Hello, Mrs.Lady Gaga!"
// user.sayHello.apply(user2, ["Mrs."]); // "Hello, Mrs.Lady Gaga!"

// console.log(user.getData("Ivan", "Ivanov"));

// console.log(user.getData());
// console.log(user.getData.call(user2));
// console.log(user.sayHello.call(user2, "test "));

// const user = {
//   firstName: "Kirk",
//   secondName: "Hammett",
//   age: 18,
//   getFullName: function () {
//     const args = [];
//     for (let i = 0; i < arguments.length; i++) {
//       args.push(arguments[i]);
//     }
//     return this.firstName + " " + this.secondName + args.join("| ");
//   },
//   sayHello: function (userName = this.getFullName()) {
//     console.log("Hello, " + userName + "! Your age is " + this.age);
//   },
// };

// const student = {
//   firstName: "Ivan",
//   secondName: "Ivanov",
//   age: 20,
// };

// const arr = ["!", "?", "))))"];

// console.log(user.getFullName.apply(student, arr));
// const getFullName = user.getFullName.bind(student, ...arr);
// console.log(user.getFullName.call(student, ...arr));
// console.log(getFullName());

// user.sayHello();
// user.sayHello.call(student, user.getFullName.apply(student));
// user.sayHello.apply(student, [user.getFullName.apply(student)]);

function User(name, lastName, age = 18) {
  this.age = age;
  this.name = name;
  this.lastName = lastName;
  this.sayHello = function () {
    return this.name + " " + this.lastName + ", age is: " + this.age;
  };
}

// User();
const user1 = new User("John", "Smith", 20);
const user2 = new User("Ivan", "Noname", 22);

console.log(user1.sayHello());
console.log(user2.sayHello());
// console.log(user1, user2);

console.log(user1 instanceof User);
console.log(user1 instanceof Object);
