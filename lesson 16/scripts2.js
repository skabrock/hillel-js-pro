"use strict";

const data = {
  data: ["phone", "laptop", "desktop", "server"],
  version: "2.3.18",
};

const params = {
  method: "POST",
  body: JSON.stringify(data),
};

fetch("https://jsonplaceholder.typicode.com/posts", params)
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });
