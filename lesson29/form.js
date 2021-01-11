export function getForm(name) {
  return document.forms[name];
}

export function getFormData(form) {
  return [...new FormData(form).entries()];
}

export function sendData(data) {
  fetch("http://someurl.com.ua", { method: "POST", body: data });
}

export function handleSubmit(e) {
  e.preventDefault();

  sendData(getFormData(this));
}

export function initForm(formName) {
  const form = getForm(formName);

  console.log(document.forms);

  form.addEventListener("submit", handleSubmit);
}
