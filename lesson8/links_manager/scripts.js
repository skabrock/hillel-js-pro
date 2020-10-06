"use strict";

const list = document.getElementById("links-list"),
  addLinkButton = document.getElementById("add-link"),
  removeAllLinksButton = document.getElementById("remove-links");

function createLink(href) {
  const element = document.createElement("li"),
    link = document.createElement("a"),
    removeButton = createDeleteButton(element);

  link.href = processLink(href);
  link.innerText = href;
  link.target = "blank";

  element.appendChild(link);
  element.appendChild(document.createTextNode(" "));
  element.appendChild(removeButton);

  return element;
}

function createDeleteButton(node) {
  const element = document.createElement("button");

  element.innerText = "×";
  element.addEventListener("click", function () {
    node.remove();
  });

  return element;
}

function addLink() {
  const answer = prompt("Please enter a link", "http://google.com");

  if (answer) {
    list.appendChild(createLink(answer));
  }
}

function removeAllLinks() {
  list.innerHTML = "";
}

function processLink(string) {
  if (string.indexOf("http://") && string.indexOf("https://")) {
    return "http://" + string;
  }

  return string;
}

addLinkButton.addEventListener("click", addLink);
removeAllLinksButton.addEventListener("click", removeAllLinks);
