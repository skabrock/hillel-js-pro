"use strict";

const clockElement = document.querySelector(".clock");

startClock(getTimeFromDate(new Date()));

function getTimeFromDate(date) {
  return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
}

function startClock(time) {
  renderTime(time);

  setInterval(function () {
    renderTime((time += 0.5));
  }, 500);
}

function renderTime(time) {
  clockElement.innerHTML = [
    timeValWrapper(Math.floor(time / (60 * 60)) % 24),
    timeValWrapper(Math.floor(time / 60) % 60),
    timeValWrapper(Math.floor(time % 60)),
  ].join(time % 1 === 0 ? ":" : " ");
}

function timeValWrapper(value) {
  return leftPad(String(value), 2, "0");
}

function leftPad(string, length, symbol) {
  const prefix = new Array(length).fill(symbol).join("");

  return `${prefix}${string}`.slice(-length);
}
