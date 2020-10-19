"use strict";

const LISTS = ["TO_DO", "DONE", "REJECTED"];

const LIST_IDS = {
  TO_DO: "to-do-list",
  DONE: "done-list",
  REJECTED: "rejected-list",
};

const LIST_TITLES = {
  TO_DO: "To do",
  DONE: "Done",
  REJECTED: "Rejected",
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
  if (e.target.type !== "checkbox") return;

  const element = e.target.closest("li");
  const elementText = element.querySelector("label").innerText;
  const addTo = e.target.checked ? LISTS[1] : LISTS[0];

  addTask(addTo, elementText);
  element.remove();
  clearLists();
});

root.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;

  const listContainer = e.target.closest("div");
  const element = e.target.closest("li");
  const elementText = e.target.previousElementSibling.innerText;

  const listId = LISTS.find((listId) => {
    return LIST_IDS[listId] === listContainer.id;
  });

  const addTo = listId === LISTS[2] ? LISTS[0] : LISTS[2];

  addTask(addTo, elementText);
  element.remove();
  clearLists();
});

function clearLists() {
  document.querySelectorAll("section ul").forEach((element) => {
    !element.children.length && element.parentNode.remove();
  });
}

function addTask(listId, text) {
  const list = document.getElementById(LIST_IDS[listId]);
  const element = createTask(listId, text);

  if (list) {
    list.querySelector("ul").innerHTML += element;
  } else {
    const listHTML = createList(LIST_IDS[listId], LIST_TITLES[listId], element);
    const listIndex = LISTS.indexOf(listId);
    root.getElementsByTagName("section")[listIndex].innerHTML = listHTML;
  }
}

function createTask(listId, text) {
  return createElement(
    text,
    listId === LISTS[0] ? "" : "checked",
    listId === LISTS[2] ? "Restore" : "×"
  );
}

function createElement(text, attrs, button) {
  return elementTemplate.innerText
    .replace("{{text}}", text)
    .replace("{{attrs}}", attrs)
    .replace("{{button}}", button);
}

function createList(id, title, content) {
  return listTemplate.innerText
    .replace("{{id}}", id)
    .replace("{{title}}", title)
    .replace("{{content}}", content);
}
