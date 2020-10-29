"use strict";

const STORAGE_NAME = "comments";
const messagesBlock = document.getElementById("comments");

render();

function render() {
  const template = document.getElementById("message-template").innerText;
  const comments = getComments();

  messagesBlock.innerHTML = comments
    .map(({ name, message, date, edited }) => {
      const dateTime = moment(date).format("DD.MM.yyyy HH:mm");
      let messageBody = message
        .replace(/<([^>]+)>/gi, "")
        // .replace(/<.+?>/gi, "")
        // .replace(/<.+?>.*?<\/.{1,10}?>/gi, function (result) {
        //   return result.replace(/<.+?>/gi, "");
        // })
        .replace(
          /\b(https?:\/\/)?[a-z\d-\.]+\.[a-z]{2,6}([\/\w-\.]*)*\/?\b/g,
          `<a href="$&">$&</a>`
        )
        .replace(
          /\*\*.+?\*\*/g,
          (str) => "<strong>" + str.slice(2, -2) + "</strong>"
        )
        .replace(
          /\-\-.+?\-\-/g,
          (str) => "<strike>" + str.slice(2, -2) + "</strike>"
        )
        .replace(/__.+?__/g, (str) => "<i>" + str.slice(2, -2) + "</i>");

      return template
        .replace("{{username}}", name)
        .replace("{{message}}", messageBody)
        .replace("{{date}}", `<time>${dateTime}</time>`)
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

function validateName(name) {
  return /^[A-Z][a-z]+(\s[A-Z][a-z]+){0,2}$/g.test(name);
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

    const name = this.name.value.trim();
    const message = this.message.value.trim();

    if (!validateName(name)) {
      alert("Wrong user name");
      return;
    }

    if (!message) return;

    editComment(index, {
      name,
      message,
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
  const date = moment();

  if (!validateName(name)) {
    alert("Wrong user name");
    return;
  }

  if (!message) return;

  comments.push({ name, message, date });

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

document.querySelectorAll(".button-panel button").forEach((button) => {
  const textArea = button.closest("form").querySelector("textarea");
  let edging = "";

  switch (button.innerText) {
    case "Bold":
      edging = "**";
      break;
    case "Italic":
      edging = "__";
      break;
    case "Line-through":
      edging = "--";
      break;
  }

  button.addEventListener("click", function () {
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const val = textArea.value;

    if (end === start) return;

    textArea.value = [
      val.slice(0, start),
      val.slice(start, end),
      val.slice(end),
    ].join(edging);
  });
});
