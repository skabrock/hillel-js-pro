import "../styles/main.scss";
import moduleFn from "./module.js";

const someFn = (data) => {
  console.log("webpack");

  if (true) {
    return data;
  }

  alert("Good morning!");
};

console.log(someFn("test 12345467890"));
console.log(someFn("test"));
console.log(moduleFn(3, 2, 5));
