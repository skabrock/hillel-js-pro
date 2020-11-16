"use strict";

const htmlAccordion = new Accordion(document.querySelector("#html"));
const cssAccordion = new Accordion(document.querySelector("#css"));
const jsAccordion = new Accordion(document.querySelector("#js"));
const reactAccordion = new Accordion(document.querySelector("#react"));

// htmlAccordion.show();

// console.log(htmlAccordion);

const accordions = [htmlAccordion, cssAccordion, jsAccordion, reactAccordion];

document.querySelectorAll("button")[0].addEventListener("click", function () {
  accordions.forEach(function (accordion) {
    accordion.hide();
    // accordion.state = "closed";
  });
});

document.querySelectorAll("button")[1].addEventListener("click", function () {
  accordions.forEach(function (accordion) {
    // accordion.show();
    accordion.state = "opened";
  });
});

document.querySelectorAll("button")[2].addEventListener("click", function () {
  accordions.forEach(function (accordion) {
    accordion.toggle();
  });
});
