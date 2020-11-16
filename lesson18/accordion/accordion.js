"use strict";

const ACCORDION_STATES = {
  OPENED: "opened",
  CLOSED: "closed",
};

const HIDDEN_CLASS = "hidden";

function Accordion(element) {
  this.element = element;
  this.title = element.querySelector(".title");
  this.body = element.querySelector(".body");

  this.hide();

  this.title.addEventListener("click", this.toggle.bind(this));
}

Accordion.prototype = {
  show: function () {
    this.body.classList.remove(HIDDEN_CLASS);
  },
  hide: function () {
    this.body.classList.add(HIDDEN_CLASS);
  },
  toggle: function () {
    this.body.classList.toggle(HIDDEN_CLASS);
  },
};

Object.defineProperty(Accordion.prototype, "state", {
  get() {
    return this.body.classList.contains(HIDDEN_CLASS)
      ? ACCORDION_STATES.CLOSED
      : ACCORDION_STATES.OPENED;
  },
  set(value) {
    if (value === ACCORDION_STATES.OPENED) {
      this.show();
    } else if (value === ACCORDION_STATES.CLOSED) {
      this.hide();
    }
  },
});
