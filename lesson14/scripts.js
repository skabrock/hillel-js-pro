"use strict";

const form = document.forms.main;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = form.email.value;

  // console.log(/^[0-9a-z]+@[a-z]+(\.[a-z]+)+$/i.test(email));
  // console.log(
  //   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(
  //     input
  //   )
  // );

  const name = form.name.value;

  // console.log(/^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/.test(name));

  // console.log(name);

  const content = form.content.value;

  // console.log(/^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/.test(name));
  // console.log(content.replace(/https?:\/\/.+\.w+/, "{link here}"));
  console.log(
    content.replace(/\bhttps?:\/\/.+?\.\w+(:\d+)?\b/g, "{link here}")
  );
  // console.log(content.replace(new RegExp("https?://.+?\.w+")));
  // console.log(content);
});
