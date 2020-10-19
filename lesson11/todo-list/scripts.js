"use strict";

const LISTS = ["TO_DO", "DONE"];

const LIST_IDS = {
  TO_DO: "to-do-list",
  DONE: "done-list",
};

const LIST_TITLES = {
  TO_DO: "To do",
  DONE: "Done",
};

const root = document.getElementById("root");
const input = document.getElementById("task-input");
const listTemplate = document.getElementById("list-template");
const elementTemplate = document.getElementById("element-template");

input.addEventListener("keydown", function (e) {
  const value = e.target.value.trim();

  switch (e.code) {
    case "Enter":
      value && addTask(LISTS[0], value);
    case "Escape":
      this.value = "";
  }
});

root.addEventListener("change", function (e) {
  const list = e.target.closest("ul");
  if (!list) return;

  const element = e.target.closest("li");
  const elementText = element.querySelector("label").innerText;

  if (e.target.type === "checkbox") {
    const addTo = e.target.checked ? LISTS[1] : LISTS[0];

    addTask(addTo, elementText);
    element.remove();
  }

  if (!list.children.length) {
    list.parentNode.remove();
  }
});

function addTask(listId, text) {
  const list = document.getElementById(LIST_IDS[listId]);
  const listIndex = LISTS.indexOf(listId);
  const checkBoxAttribute = listId === LISTS[1] ? "checked" : null;

  const element = createElement(text, checkBoxAttribute);

  if (list) {
    list.querySelector("ul").innerHTML += element;
  } else {
    const list = createList(LIST_IDS[listId], LIST_TITLES[listId], element);
    root.getElementsByTagName("section")[listIndex].innerHTML = list;
  }
}

function createElement(text, attrs = "") {
  return elementTemplate.innerText
    .replace("{{text}}", text)
    .replace("{{attrs}}", attrs);
}

function createList(id, title, content) {
  return listTemplate.innerText
    .replace("{{id}}", id)
    .replace("{{title}}", title)
    .replace("{{content}}", content);
}
