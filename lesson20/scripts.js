"use strict";

// setTimeout(
//   function (data) {
//     console.log(data);
//     // ...

//     button.addEventListener("click", function() {
//       const xhr = new XMLHttpRequest();

//       xhr.onreadystatechange = function() {

//       }
//     })
//   },
//   2000,
//   1234
// );

// const promise = new Promise(function (resolve) {
//   setTimeout(
//     function (data) {
//       console.log(data);
//       resolve();
//     },
//     2000,
//     "234"
//   );
// });

// promise.then(function () {
//   console.log("finished");
// });

// fetch("http://swapi.dev/api/")
//   .then(function (res) {
//     return res.json();
//     // return { a: 1 };
//   })
//   .then((data) => {
//     console.log(data);
//   });

function getData(url, cb) {
  const request = new XMLHttpRequest();

  request.open("GET", url);

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      cb(JSON.parse(request.response));
    }
  };

  request.send();
}

let getSWData = new Promise((resolve) => {
  getData("http://swapi.dev/api/", function (data) {
    resolve(data);
  });
});

getSWData
  .then((data) => {
    return new Promise((resolve) => {
      getData(Object.values(data)[0], function (data) {
        resolve(data);
      });
    });
  })
  .then((data) => {
    return new Promise((resolve) => {
      getData(data.results[0].url, function (data) {
        resolve(data);
      });
    });
  })
  .then((data) => {
    console.log(data);
  });

new Promise(function (resolve, reject) {
  // ...
  document.addEventListener("click", function (event) {
    resolve(event);
  });

  setTimeout(function () {
    reject();
  }, 3000);
  // ...
})
  .then(function () {
    // throw new Error("Our custom error");
    console.log("test");
  })
  .then(
    function () {
      console.log("then 2");
    },
    function (error) {
      console.log("something went wrong", error);

      document.querySelector("#id").innerHTML(error);
      // throw new Error("Our custom error2");
    }
  )
  .catch(function (error) {
    console.log("something went wrong", error);
  });

function httpGet(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };

    xhr.send();
  });
}

httpGet("https://swapi.dev/api/starships/9/").then((data) => {
  console.log("==========", data);
});

Promise.race([
  fetch("https://swapi.dev/api/starships/12/"),
  fetch("https://swapi.dev/api/starships/9/"),
  fetch("https://swapi.dev/api/starships/11/"),
]).then((data) => {
  console.log(data);
});
