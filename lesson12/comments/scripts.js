"use strict";

const STORAGE_NAME = "comments";
const messagesBlock = document.getElementById("comments");

render();

function render() {
  const template = document.getElementById("message-template").innerText;
  const comments = getComments();

  messagesBlock.innerHTML = comments
    .map(({ name, message, edited }) => {
      return template
        .replace("{{username}}", name)
        .replace("{{message}}", message)
        .replace("{{badge}}", edited ? "<i>edited</i>" : "");
    })
    .join("");
}

function getComments() {
  return JSON.parse(localStorage.getItem(STORAGE_NAME)) || [];
}

function setComments(comments) {
  localStorage.setItem(STORAGE_NAME, JSON.stringify(comments));
  render();
}

function removeComment(index) {
  const comments = getComments();
  comments.splice(index, 1);

  setComments(comments);
}

function editComment(index, comment) {
  const comments = getComments();
  comment.edited = true;
  comments.splice(index, 1, comment);

  setComments(comments);
}

function openEditComment(index) {
  const comment = getComments()[index];

  const form = document.forms[0].cloneNode(true);

  Array.from(form.elements)
    .filter((el) => el.name)
    .forEach((el) => {
      el.value = comment[el.name];
    });

  const modal = document.createElement("div");
  modal.id = "modal";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    editComment(index, {
      name: this.name.value.trim(),
      message: this.message.value.trim(),
    });
    modal.remove();
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.remove();
    }
  });

  document.body.appendChild(modal).appendChild(form);
}

document.forms[0].addEventListener("submit", (e) => {
  e.preventDefault();

  const comments = getComments();
  const name = e.target.name.value.trim();
  const message = e.target.message.value.trim();

  if (!name || !message) return;

  comments.push({ name, message });

  setComments(comments);
  e.target.reset();
});

document.body.addEventListener("click", function (e) {
  const comment = e.target.closest(".comment");
  if (!comment || e.target.tagName !== "BUTTON") return;

  const index = Array.from(messagesBlock.children).indexOf(comment);

  switch (e.target.className) {
    case "edit":
      openEditComment(index);
      break;
    case "delete":
      removeComment(index);
  }
});
