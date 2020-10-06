"use strict";

// console.log("test");

// document.getElementById("el1").addEventListener("click", function () {
//   alert("el1");
// });

// document.getElementById("el2").addEventListener(
//   "click",
//   function () {
//     alert("el2");
//   },
//   {
//     capture: true,
//     once: true,
//     passive: true,
//   }
// );

// document.getElementById("el2").addEventListener(
//   "click",
//   function () {
//     alert("el2");
//   },
//   true
// );

// document.getElementById("el3").addEventListener("click", function (event) {
//   // event.stopPropagation();
//   event.stopImmediatePropagation();
//   alert("el3");
// });

// document.getElementById("el3").addEventListener("click", function (event) {
//   alert("el3.2");
// });

document.getElementById("btn").addEventListener("click", (event) => {
  // console.log(event.target);
  let value;

  const modal = document.createElement("div");
  modal.id = "modal";
  modal.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  const cancel = document.createElement("button");
  const ok = document.createElement("button");
  const input = document.createElement("input");

  input.type = "text";

  cancel.innerText = "cancel";
  cancel.addEventListener("click", close);
  ok.innerText = "ok";
  ok.addEventListener("click", close);

  input.addEventListener("change", function (event) {
    value = event.target.value;
  });

  modal.appendChild(input);
  modal.appendChild(cancel);
  modal.appendChild(ok);

  const wrapper = document.createElement("div");
  wrapper.id = "wrapper";

  function close() {
    wrapper.remove();
    console.log(value);
  }

  wrapper.appendChild(modal);
  wrapper.addEventListener("click", function () {
    close();
  });

  document.body.appendChild(wrapper);
});
