"use strict";

// console.log(document.forms.registration);
let values = {};

document.forms.registration.addEventListener("submit", function (e) {
  e.preventDefault();

  // values.name = this.elements.userName.value;
  // values.password = this.elements.password.value;
  // values.gender = this.elements.gender.value;
  // values.countries = this.elements.countries.value;

  // // for (let i = 0; i < this.elements.length; i++) {
  // //   values.push(this.elements[i].value);
  // // }
  // console.log(values);
})

document.forms.registration.elements.userName.addEventListener("keydown", function (e) {
  console.log(e);
})

// const el = document.forms["login-form"].elements;
// let values = [];

// for (let i = 0; i < el.length; i++) {
//   values.push(el[i].value);
// }

// console.log(values);
