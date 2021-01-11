// const concatStringElements = require("./app.js");
import { concatStringElements, getValue, concatStrings } from "./app.js";
const sum = require("./sum.js");

describe("concatStringElements", () => {
  let testArray;

  beforeAll(() => {
    testArray = [12, null, "ersdg", undefined, "thfdgfjk", 8435, "a"];
  });

  test("returns 'ersdgthfdgfjka' from [12, null, 'ersdg', undefined, 'thfdgfjk', 8435, 'a']", () => {
    expect(concatStringElements(testArray)).toBe("ersdgthfdgfjka");
  });

  test("returns empty string if nothing has been passed", () => {
    expect(concatStringElements()).toBe("");
  });
});

describe("getValue", () => {
  test("null", () => {
    // expect(getValue(null)).toBeNull();
    expect(getValue(null)).toBe(null);
  });

  test("undefined", () => {
    expect(getValue(undefined)).toBeUndefined();
  });

  test("42", () => {
    expect(getValue("42")).toBeDefined();
  });

  test("null", () => {
    expect(getValue(null)).toBeDefined();
  });

  test("NaN", () => {
    expect(getValue(NaN)).toBeDefined();
  });

  test("NaN toBeFalsy", () => {
    expect(getValue(NaN)).toBeFalsy();
  });

  test("-0 toBeFalsy", () => {
    expect(getValue(-0)).toBeFalsy();
  });

  test("['a', 'b', 'c'] from 'abc'", () => {
    expect(getValue("abc")).toEqual(["a", "b", "c"]);
  });

  test("['a', 'b', 'c'] contain 'c'", () => {
    expect(getValue("abc")).toContain("c");
  });
});

// numbers

describe("sum function", () => {
  it("should return more than 9.5 from 5, 5 arguments", () => {
    expect(sum(5, 5)).toBeGreaterThan(9.5);
  });

  it("should return more than 10 from 5, 5 arguments", () => {
    expect(sum(5, 5)).toBeGreaterThanOrEqual(10);
  });

  it("should return less than 15 from 5, 5 arguments", () => {
    expect(sum(5, 5)).toBeLessThan(15);
  });

  it("should return less than 10 from 5, 5 arguments", () => {
    expect(sum(5, 5)).toBeLessThanOrEqual(10);
  });

  it("should return 0.3 from 0.1, 0.2 arguments", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("concatStrings", () => {
  it("should return 'abc' string", () => {
    expect(concatStrings("a", "b", "c")).toMatch("abc");
  });
});
