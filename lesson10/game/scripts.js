"use strict";

const shape = createDiv("shape");
const target = createDiv("target");
document.body.appendChild(shape);
document.body.appendChild(target);
let score;
let scoreBlock;

initScore();
setPositions();

function createDiv(className) {
  const obj = document.createElement("div");
  obj.className = className || "";
  return obj;
}

document.addEventListener("keydown", function (e) {
  // console.log(shape.getBoundingClientRect());
  const value = e.shiftKey ? 10 : 1;

  switch (e.code) {
    case "ArrowUp":
      moveShapeTo({ y: -value });
      break;
    case "ArrowDown":
      moveShapeTo({ y: value });
      break;
    case "ArrowLeft":
      moveShapeTo({ x: -value });
      break;
    case "ArrowRight":
      moveShapeTo({ x: value });
      break;
  }
});

function moveShapeTo(coords) {
  moveTo(shape, coords);
}

function moveTo(el, { x = 0, y = 0 }) {
  setPosition(el, { x: el.offsetLeft + x, y: el.offsetTop + y });
}

function setPosition(el, { x = el.offsetLef, y = el.offsetTop }) {
  el.style.top = y + "px";
  el.style.left = x + "px";

  checkResult();
}

function getRandomPosition(el) {
  return {
    x: Math.round(Math.random() * (window.innerWidth - el.offsetWidth)),
    y: Math.round(Math.random() * (window.innerHeight - el.offsetHeight)),
  };
}

function checkResult() {
  if (
    shape.offsetLeft === target.offsetLeft &&
    shape.offsetTop === target.offsetTop
  ) {
    setPositions();
    setScore();
  }
}

function setPositions() {
  setPosition(shape, getRandomPosition(shape));
  setPosition(target, getRandomPosition(target));
}

function initScore() {
  scoreBlock = createDiv("score");
  document.body.appendChild(scoreBlock);
  setScore();
}

function setScore() {
  score = score + 1 || 0;
  scoreBlock.innerText = "Score: " + score;
}

document.getElementById("name-input").addEventListener("keydown", function (e) {
  shape.innerText = e.target.value;
});

document.getElementById("color-input").addEventListener("change", function (e) {
  shape.style.backgroundColor = e.target.value;
});

document
  .getElementById("shape-type-input")
  .addEventListener("change", function (e) {
    shape.className = "shape " + e.target.value;
    target.className = "target " + e.target.value;
  });
