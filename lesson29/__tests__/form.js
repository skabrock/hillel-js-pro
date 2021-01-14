import { getFormData, initForm } from "../form.js";
global.fetch = jest.fn(() => Promise.resolve());

describe("getFormData function", () => {
  let testForm;

  beforeAll(() => {
    testForm = document.createElement("form");
    testForm.name = "login";
    const testElement = document.createElement("input");
    testElement.name = "testElementName";
    testElement.value = "testValue";
    testForm.append(testElement);
    document.body.append(testForm);
  });

  test("get form data", () => {
    expect(getFormData(testForm)).toEqual([["testElementName", "testValue"]]);
  });

  test("initForm", () => {
    initForm(testForm.name);
    testForm.submit();

    expect(fetch).toHaveBeenCalledWith("http://someurl.com.ua", {
      method: "POST",
      body: [["testElementName", "testValue"]],
    });
  });
});
