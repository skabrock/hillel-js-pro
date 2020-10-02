"use strict";

// console.log("test");

// console.dir(document.getElementsByTagName("div")[0]);
// console.dir(document.querySelectorAll("div")[0]);

// console.log(document.querySelectorAll("#test"), 1);

// window.onload = function () {
//   //   console.log(document.getElementsByTagName("div"));
//   console.log(document.querySelectorAll("#test"), 2);
// };

// console.log(document.querySelectorAll("#test"), 3);

// window.addEventListener("load", function () {
//   //   console.log(document.getElementsByTagName("div"));
//   console.log(document.querySelectorAll("#test"), 4);
// });

// function fn() {
//   console.log(arguments);
//   return `${this.name} ${this.surname}`;
// }

// const user = {
//   name: "John",
//   surname: "McCane",
// };

// // console.log(fn.call(user));
// const userFn = fn.bind(user, 1);
// console.log(userFn(2));

// const fn2 = function (context, ...other) {
//   return (...other2) => {
//     return fn.call(context, ...other, ...other2);
//   };
// };

// const userFn2 = fn2(user, 1);

// console.log(userFn2(3));

// window.onload = function () {
const el = document.getElementById("card");

console.dir(el);

setTimeout(() => {
  // el.style.backgroundColor = "red";
  // el.className = el.className + " active-element-new";
  // el.style = "position: absolute; top: 0; width: 300px";
}, 1000);

let time = 0;

// console.log(document);

// setInterval(() => {
//   time = time + 10;
//   // el.style.backgroundColor = "red";
//   // el.className = el.className + " active-element-new";
//   el.style = "position: absolute; top: " + time + "px; width: 300px";
// }, 1000);

const el2 = document.getElementsByClassName("list-group-item");

const arr = ["red", "green", "blue", "pink", "brown"];

// for (let i = 0; i < el2.length; i++) {
//   el2[i].style = "background-color: " + arr[i];
// }

// console.log(el2);

const el3 = document.getElementsByTagName("div");
const el4 = document.getElementsByName("qwer");

// console.log(el3, el4);

// const el5 = document.querySelector(".list-group-item div");
// const el6 = document.querySelectorAll(".list-group-item a");

// el6.forEach((item, i) => {
//   item.style = "background-color: " + arr[i];
// });

// console.log(el6);
// console.log(el6.keys(), el6.values());

const el7 = document.querySelectorAll(".card")[0];

// el7.setAttribute("class", "test-class");

// const ans = prompt("type something");

// console.log(el7.innerHTML, el7.innerText);
// el7.innerHTML = ans;
// el7.innerText = "<div class='card'>new row<div>";
// el7.innerText = "new row2";

const el8 = document.createElement("div");
el8.innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, enim! Delectus eius maiores ad sunt blanditiis quos ea vel nobis cumque beatae commodi, tempora quae, et reprehenderit tenetur saepe fugiat.";

el8.style = "font-size: 30px; color: red";
console.log(el8);

// el7.appendChild(el8);
// el7.replaceWith(el8);
// el7.before(el8);
// el7.after(el8);

const el9 = el7.cloneNode(true);

console.log(el9);

// setTimeout(function () {
//   el7.remove();
// }, 3000);

console.dir(el7);

// el7.onclick = function () {
//   el7.appendChild(el9);
// };

let flag = false;

// el7.onclick = () => {
//   if (flag) {
//     el7.onclick = null;
//     return;
//   }
//   alert("test5");
//   flag = true;
// };

const button = document.getElementById("button");

const func1 = function (event) {
  // console.log(event);
  event.stopPropagation();
  event.preventDefault();

  // if (flag) {
  //   button.removeEventListener("click", func1);
  //   return;
  // }

  alert("test3 ===========");
  flag = true;
};

button.addEventListener("click", func1);
button.addEventListener("mouseup", func1);

// button.addEventListener("click", function () {
//   el7.appendChild(el9);
// });

// setInterval(() => {
//   el7.classList.toggle("new-class-name");
// }, 1000);
