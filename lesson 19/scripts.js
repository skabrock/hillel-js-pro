// "use strict";

// function Fn(name) {
//   this.name = name;

//   // this.sayHello = function () {
//   //   console.log("Hi, my name is " + this.name);
//   // };
// }

// Fn.prototype.sayHello = function () {
//   console.log("Hi, my name is " + this.name);
// };

// const fnObj = new Fn("Tom");

// console.log(fnObj);
// console.log(fnObj.sayHello());

// // --------------------------

// class Fn2 {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log("Hi, my name is " + this.name);
//   }
// }

// const fnObj2 = new Fn2("Jack");
// fnObj2.sayHello();

// console.log(fnObj2);

// function UserAccount(user, balance) {
//   let _balance = balance;

//   this.user = user;

//   this.setBalance = function (newBalance) {
//     if (typeof newBalance === "number") {
//       _balance = newBalance;
//     }
//   };

//   this.getBalance = function () {
//     return _balance;
//   };
// }

// UserAccount.prototype.setBalance = function (newBalance) {
//   if (typeof newBalance === "number") {
//     this._balance = newBalance;
//   }
// };

// const guest = new UserAccount("Ivan", 100);

// console.log(guest);
// guest.user = "Alex";

// document.querySelector("button").addEventListener("click", function () {
//   const balance = guest.getBalance();

//   console.log(balance);

//   guest.setBalance(balance - 10);
//   console.log(guest._balance);
//   // guest._balance = function () {};
//   // console.log(guest);
// });

// function Animal(name) {
//   this.name = name;

//   Animal.count += 1;
// }

// Animal.count = 0;

// Animal.prototype.walk = function () {
//   console.log("I'm " + this.name + ", and I'm walking");
// };

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// function Dog(name) {
//   Animal.call(this, name);
//   this.name = name;
// }

// Dog.prototype.sound = function () {
//   console.log("Гав");
// };

// const dog1 = new Dog("Spike");

// console.log(dog1);
// dog1.walk();
// dog1.sound();

// console.log(Animal.count);

class Animal {
  constructor(name) {
    this.name = name;
  }

  static count = 0;
  static getCount = function () {
    console.log("tew");
  };

  walk() {
    console.log("I'm " + this.name + ", and I'm walking");
  }
}

const anim1 = new Animal("ew34");
const anim2 = new Animal("ew34");
const anim3 = new Animal("ew34");

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }

  sound() {
    console.log("Гав");
  }
}

const dog1 = new Dog("Spike");

console.log(dog1);
dog1.walk();
dog1.sound();

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Object);
console.log(dog1 instanceof Date);
