"use strict";

const imagePaths = [
  "./images/0000-0000.jpg",
  "./images/0000-0001.jpg",
  "./images/0000-0002.jpg",
  "./images/0000-0003.jpg",
  "./images/0000-0004.jpg",
  "./images/0000-0005.jpg",
  "./images/0000-0006.jpg",
  "./images/0000-0007.jpg",
  "./images/0000-0008.jpg",
  "./images/0000-0009.jpg",
  "./images/0000-0010.jpg",
  "./images/0000-0011.jpg",
  "./images/0000-0012.jpg",
];

const elements = imagePaths.length;
let currentIndex = 0;
let disableControls = false;
let modalWrapper;

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
  goToSlide(--currentIndex, true);
});

rightBtn.addEventListener("click", () => {
  goToSlide(++currentIndex, true);
});

thumbs.addEventListener("click", function (e) {
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

  openImageModal();
});

document.addEventListener("keyup", (e) => {
  if (
    modalWrapper &&
    (e.code === "Enter" || e.code === "Space" || e.code === "Escape")
  ) {
    closeImageModal();
    return;
  }

  if (disableControls) {
    return;
  }

  if (e.code === "ArrowRight" || e.code === "ArrowDown") {
    goToSlide(++currentIndex, true);
  } else if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
    goToSlide(--currentIndex, true);
  } else if (e.code === "Enter" || e.code === "Space") {
    openImageModal();
  }
});

// helper functions

function createElement(elemName, className) {
  const elem = document.createElement(elemName);
  elem.className = className;

  return elem;
}

function goToSlide(num = 0, animated) {
  if (disableControls) {
    return;
  }

  if (num < 3) {
    Array.from(imageSet.cloneNode(true).children)
      .reverse()
      .forEach((item) => {
        carouselContent.prepend(item);
      });

    num = currentIndex += elements;
    carouselContent.style = `transform: translateX(-${(num + 1) * 100}vw)`;
  } else if (num > carouselContent.children.length - 3) {
    Array.from(imageSet.cloneNode(true).children).forEach((item) => {
      carouselContent.append(item);
    });
  }

  disableControls = animated;

  setTimeout(() => {
    if (animated) {
      carouselContent.classList.add("animated");

      setTimeout(function () {
        carouselContent.classList.remove("animated");
        disableControls = false;
      }, 400);
    }

    carouselContent.style = `transform: translateX(-${num * 100}vw)`;
  }, 0);
}

function openImageModal() {
  disableControls = true;

  modalWrapper = createElement("div", "modal-wrapper");
  const modal = createElement("img", "modal");
  modal.src = carouselContent.children[currentIndex].children[0].src;

  modal.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  modalWrapper.addEventListener("click", closeImageModal);

  document.body.appendChild(modalWrapper).appendChild(modal);
}

function closeImageModal() {
  modalWrapper.remove();
  modalWrapper = null;
  disableControls = false;
}

// execute functions

goToSlide();
