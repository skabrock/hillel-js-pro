"use strict";

const root = document.getElementById("root");
const rootEndpoint = "https://swapi.dev/api/";
const lintRegExp = /^(https?:\/\/)?[a-z\d-\.]+\.[a-z]{2,6}([\/\w-\.]*)*\/?$/;
const screens = ["categories", "items", "info"];

loadData(
  rootEndpoint,
  () => {
    renderData(screens[0]);
  },
  (data) => {
    renderData(screens[0], null, getCategories(data));
  }
);

function loadData(url, onLoading, onSuccess) {
  onLoading();
  const xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response);

      onSuccess(data);
    }
  };
}

function getCategories(obj) {
  const categoriesArr = Object.keys(obj);
  const categoriesList = document.createElement("ul");

  categoriesArr.forEach(function (category) {
    const el = document.createElement("li");

    el.innerText = category;

    el.addEventListener("click", () => {
      loadData(
        obj[category],
        () => {
          renderData(screens[1], category);
        },
        (data) => {
          renderData(screens[1], category, getItems(data), category);
        }
      );
    });

    categoriesList.appendChild(el);
  });

  return categoriesList;
}

function getItems(obj) {
  const itemsArr = obj.results;
  const itemsList = document.createElement("ul");

  itemsArr.forEach(function (item) {
    const el = document.createElement("li");
    const title = item.name || item.title;

    el.innerText = title;

    el.addEventListener("click", () => {
      renderData(screens[2], title, getItemInfo(item));
    });

    itemsList.appendChild(el);
  });

  return itemsList;
}

function getItemInfo(obj) {
  const itemInfo = Object.keys(obj).reduce(function (acc, key) {
    if (typeof obj[key] === "object" || lintRegExp.test(obj[key])) {
      return acc;
    }

    const el = document.createElement("tr");
    const title = document.createElement("td");
    title.innerText = key + ": ";
    const content = document.createElement("td");
    content.innerText = obj[key];

    el.appendChild(title);
    el.appendChild(content);
    acc.appendChild(el);

    return acc;
  }, document.createElement("tbody"));

  const itemInfoTable = document.createElement("table");
  itemInfoTable.append(itemInfo);
  return itemInfoTable;
}

function renderData(name, heading, content) {
  const element = document.getElementsByClassName(name)[0];
  const title = document.createElement("h3");
  title.innerText = heading || name;

  const wrapper = document.createElement("div");
  wrapper.className = name;
  wrapper.append(title);

  if (content) {
    wrapper.append(content);
  } else {
    const loadingImage = document.createElement("img");
    loadingImage.src = "./img/loading.gif";

    wrapper.append(loadingImage);
  }

  if (element) {
    while (element.nextElementSibling) {
      element.nextElementSibling.remove();
    }

    element.replaceWith(wrapper);
  } else {
    root.append(wrapper);
  }
}
