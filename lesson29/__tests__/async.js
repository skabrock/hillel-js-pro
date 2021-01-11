import { getValueAfterAWhile } from "../async.js";

test("getValueAfterAWhile promise way", () => {
  getValueAfterAWhile(100).then((result) => {
    expect(result).toBe(100);
  });
});

test("getValueAfterAWhile promise way, error", () => {
  return getValueAfterAWhile({}).catch((error) => {
    expect(error).toMatch("value is an object");
  });
});

test("getValueAfterAWhile async/await", async () => {
  const result = await getValueAfterAWhile(100);

  expect(result).toBe(100);
});

test("getValueAfterAWhile async/await, error", async () => {
  try {
    await getValueAfterAWhile({});
  } catch (error) {
    expect(error).toBe("value is an object");
  }
});
