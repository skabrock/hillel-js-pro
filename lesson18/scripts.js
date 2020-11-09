// "use strict";

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// obj.d = 4; // writable: true, configurable: true, enumerable: true

// Object.defineProperty(obj, "e", {
//   value: 5,
//   writable: true, // false
//   configurable: true, // false
//   // enumerable: true // false
// });

// obj.d = 4.1;
// // obj.e = 5.1;
// // delete obj.e;

// console.log(Object.getOwnPropertyDescriptor(obj, "e"));

// console.log(obj);

// const person = {
//   firstName: "John",
//   lastName: "Smith",
//   age: 18,
// };

// Object.defineProperty(person, "name", {
//   get: function () {
//     return (
//       this.firstName + " " + this.lastName + " ," + this.age + " years old"
//     );
//   },
//   set: function (value) {
//     this.firstName = value.split(" ")[0];
//     this.lastName = value.split(" ")[1];
//     this.age = value.split(" ")[2];
//   },
// });

// console.log(person);
// console.log("person.name", person.name);

// person.name = "Ivan Ivanov 11";

// console.log(person);

// function User(name) {
//   this.name = name;
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const admin = new User("Gena");

// console.log(admin);

// const testObj = { constructor: "123" };

// console.log(testObj);

// console.log(testObj.constructor);
// console.log(testObj.hasOwnProperty("constructor"));

// const obj = Object.create({ a: 1 });
// const obj = Object.assign({}, null);

// const obj = {};

// console.log(obj);

function Person(name, born) {
  this.name = name;
  this.born = born;

  // this.age = function () {
  //   const date = new Date();

  //   return date.getFullYear() - this.born;
  // };
}

Person.prototype.age = function () {
  const date = new Date();

  return date.getFullYear() - this.born;
};

console.dir(Person);

const student = new Person("Ivan", 1990);
const student2 = new Person("Sergey", 1991);

console.log(student.age());
console.log(student2.age());

console.log(student);
// console.log(student2.__proto__);
// console.log(Object.getPrototypeOf(student2));

Object.setPrototypeOf(student2, null);
console.log(student2);
// console.log(student2.age());

// class PersonNew {
//   constructor(name, born) {
//     this.name = name;
//     this.born = born;
//   }

//   age() {
//     const date = new Date();

//     return date.getFullYear() - this.born;
//   }
// }

// let student3 = new PersonNew("Alexey", 1992);
// console.log(student3);
// console.log(student3.age());

const obj = {
  a: "1",
  b: "2",
};

Object.prototype.toString = function () {
  return this.a + " " + this.b;
};

console.log(obj);
alert(obj);
