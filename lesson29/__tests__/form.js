import { getFormData, sendData, handleSubmit, initForm } from "../form.js";
import { JSDOM } from "jsdom";
const dom = new JSDOM();
global.document = dom.window.document;

describe("getFormData function", () => {
  let testForm;

  beforeAll(() => {
    testForm = document.createElement("form");
    testForm.name = "login";
    const testElement = document.createElement("input");
    testElement.name = "testElementName";
    testElement.value = "testValue";
    testForm.append(testElement);
  });

  test("get form data", () => {
    expect(getFormData(testForm)).toEqual([["testElementName", "testValue"]]);
  });

  test("initForm", () => {
    initForm(testForm.name);
    testForm.submit();

    expect(fetch).toHaveBeenCalled();
  });
});
