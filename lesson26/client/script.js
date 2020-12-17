"use strict";

const form = document.forms[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = new FormData(form);

  const body = Object.fromEntries(data.entries());

  fetch("http://localhost:3002/users", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function () {
    form.reset();
  });
});

document.getElementById("getu").addEventListener("click", function (event) {
  event.preventDefault();

  fetch("http://localhost:3002/users", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const list = data.reduce(function (acc, item) {
        const li = document.createElement("li");
        li.innerHTML = item.name;

        acc.appendChild(li);

        return acc;
      }, document.createElement("ul"));

      document.body.append(list);
    });
});
