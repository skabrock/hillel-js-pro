export const getValueAfterAWhile = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof value === "object") {
        reject("value is an object");
      }
      resolve(value);
    }, 500);
  });
};
