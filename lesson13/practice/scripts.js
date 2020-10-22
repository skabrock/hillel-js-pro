"use strict";

// console.log($("li"));

// const elements = document.querySelectorAll("li");

// for (let i = 0; i < elements.length; i++) {
//   elements[i].style = "color: red";
// }

// $("body").on("click", function () {
//   $("li:contains('test'), button")
//     .css("color", "green")
//     .addClass("jtest")
//     // .slideUp(1000);
//     .animate({ opacity: 0.25, width: "10%", height: "3rem" }, 1000);
// });

const $btn = $("<button/>", {
  id: "button",
  href: "https://google.com.ua",
  title: "Search engine",
  text: "Google.com",
  click: function (e) {
    e.preventDefault();
    alert("hello world!");
  },
});

console.log($btn);

$btn.appendTo("body");
