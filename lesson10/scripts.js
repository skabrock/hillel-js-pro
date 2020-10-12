"use strict";

const items = 20;
const ul = document.querySelector("ul");

// ul.innerHTML = "<a href='https://google.com'>test</a>";

console.log(ul.innerHTML);

ul.children[0].addEventListener("click", (e) => {
  e.target.innerText = "Test";
});

for (let i = 0; i < items; i++) {
  ul.innerHTML += `<li>${i}</li>`;
  ul.innerHTML = ul.innerHTML + `<li>${i}</li>`;
}

console.log(ul.outerHTML);

console.log(ul.innerText);

// ul.innerText = "<p>test</p>";
// ul.textContent = "<p>test</p>";

console.log(document.getElementById("template").innerText);

const template = document.getElementById("template").innerText;
const newTemplate = template.replace(
  "{{link}}",
  "https://www.w3schools.com/images/colorpicker.gif"
);

document.getElementsByTagName("p")[0].innerHTML = newTemplate;
