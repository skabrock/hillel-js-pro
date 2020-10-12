"use strict";

const imagePaths = [
  "../nightmare/images/0000-0000.jpg",
  "../nightmare/images/0000-0001.jpg",
  "../nightmare/images/0000-0002.jpg",
  "../nightmare/images/0000-0003.jpg",
  "../nightmare/images/0000-0004.jpg",
  "../nightmare/images/0000-0005.jpg",
  "../nightmare/images/0000-0006.jpg",
  "../nightmare/images/0000-0007.jpg",
  "../nightmare/images/0000-0008.jpg",
  "../nightmare/images/0000-0009.jpg",
  "../nightmare/images/0000-0010.jpg",
  "../nightmare/images/0000-0011.jpg",
  "../nightmare/images/0000-0012.jpg",
];

const elements = imagePaths.length;
let currentIndex = 0;

// create image set

const imageSet = imagePaths.reduce((acc, src) => {
  const imageContainer = createElement("div", "image-container");
  const image = createElement("img", "image");
  image.src = src;

  acc.appendChild(imageContainer).appendChild(image);

  return acc;
}, document.createElement("div"));

// carousel creation

const carousel = createElement("div", "carousel");
const carouselContent = imageSet.cloneNode(true);
carouselContent.className = "carousel-content";

carousel.appendChild(carouselContent);

// thumbnails creation

const thumbs = imageSet.cloneNode(true);
thumbs.className = "thumbs";

// buttons creation

const leftBtn = createElement("button", "carousel-button left");
const rightBtn = createElement("button", "carousel-button right");

// insert elements in DOM

carousel.appendChild(leftBtn).after(rightBtn);
document.body.appendChild(carousel).after(thumbs);

// add event listeners

leftBtn.addEventListener("click", () => {
  goToSlide(--currentIndex);
});

rightBtn.addEventListener("click", () => {
  goToSlide(++currentIndex);
});

thumbs.addEventListener("click", function (e) {
  console.log(e.target.classList);
  if (!e.target.classList.contains("image")) {
    return;
  }

  currentIndex = [...this.children].indexOf(e.target.parentNode);

  goToSlide(currentIndex);
});

carouselContent.addEventListener("click", function (e) {
  if (!e.target.classList.contains("image")) {
    return;
  }

  openImageModal(e.target.src);
});

// helper functions

function createElement(elemName, className) {
  const elem = document.createElement(elemName);
  elem.className = className;

  return elem;
}

function goToSlide(num = 0) {
  let destination = ((num % elements) + elements) % elements;

  carouselContent.style = `transform: translateX(-${destination * 100}vw)`;
}

function openImageModal(src) {
  const modalWrapper = createElement("div", "modal-wrapper");
  const modal = createElement("img", "modal");
  modal.src = src;

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalWrapper.addEventListener("click", function () {
    this.remove();
  });

  document.body.appendChild(modalWrapper).appendChild(modal);
}
