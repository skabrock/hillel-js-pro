"use strict";

const images = [
  "../easy/images/image1.jpg",
  "../easy/images/image2.jpg",
  "../easy/images/image3.jpg",
  "../easy/images/image4.jpg",
  "../easy/images/image5.jpg",
  "../easy/images/image6.jpg",
  "../easy/images/image7.jpg",
  "../easy/images/image8.jpg",
  "../easy/images/image9.jpg",
  "../easy/images/image10.jpg",
  "../easy/images/image11.jpg",
];

const prevBtn = document.getElementsByTagName("button")[0];
const nextBtn = document.getElementsByTagName("button")[1];
const slider = document.getElementById("slider");
const dots = document.getElementById("dots");

let activeSlide = 0;

const image = document.createElement("img");
image.src = images[activeSlide];
slider.appendChild(image);

function goTo(index) {
  image.src = images[index];
}

prevBtn.addEventListener("click", function () {
  if (activeSlide > 0) goTo(--activeSlide);
});

nextBtn.addEventListener("click", function () {
  if (activeSlide < images.length - 1) goTo(++activeSlide);
});

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[i];

  const dot = document.createElement("button");
  dot.addEventListener("click", function () {
    goTo((activeSlide = i));
  });

  dots.appendChild(dot).appendChild(img);
}

image.addEventListener("click", function () {
  const wrapper = document.createElement("div");
  const modal = document.createElement("div");
  const modalImage = document.createElement("img");

  wrapper.className = "modal";
  modalImage.src = image.src;

  wrapper.addEventListener("click", wrapper.remove);
  modal.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.body.appendChild(wrapper).appendChild(modal).appendChild(modalImage);
});
