"use strict";

const prevBtn = document.getElementsByTagName("button")[0];
const nextBtn = document.getElementsByTagName("button")[1];
const images = document.getElementsByTagName("div")[0];

let activeSlide = 0;

prevBtn.onclick = function () {
  if (activeSlide > 0) {
    images.children[activeSlide].style = "display: none";
    images.children[--activeSlide].style = "display: block";
  }
};

nextBtn.onclick = function () {
  if (activeSlide < images.children.length - 1) {
    images.children[activeSlide].style = "display: none";
    images.children[++activeSlide].style = "display: block";
  }
};
