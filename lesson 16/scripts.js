"use strict";

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.open("GET", "res.json", false);
// xhr.open("GET", "file:///Users/sk/Hillel/lessons/lesson%2016/res.json", false);

xhr.send();

setInterval(() => {
  console.log("timeout");
}, 1000);

xhr.onreadystatechange = function () {
  // console.log(xhr);

  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.statusText);
      console.log(xhr.getResponseHeader("Date"));
      console.log(xhr.response);
      console.log(xhr.responseText);
      console.log(xhr.responseURL);
      const data = JSON.parse(xhr.response);
      // console.log(data.version);

      console.log({ data });

      for (let i = 0; i < data.length; i++) {
        document.body.innerHTML += `<div>${data[i].title}</div><div>${data[i].body}</div>`;
      }
    }
  }
};

xhr.onerror = function () {
  console.log("error");
  console.log(xhr.response);
};
