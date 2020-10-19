"use strict";

const data = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : {};

document.querySelectorAll("input[type=number]").forEach(function (item) {
  item.value = data[item.name] || 1;
});

document.body.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;

  const item = e.target.innerText;
  const quantity = e.target.nextElementSibling.value;

  data[item] = quantity;

  localStorage.setItem("items", JSON.stringify(data));
});
