export function concatStringElements(array = []) {
  return array.reduce((acc, el) => {
    if (typeof el === "string") {
      acc += el;
    }
    return acc;
  }, "");
}

export function getValue(value) {
  if (typeof value === "string") {
    return Array.from(value);
  }
  return value;
}

export const concatStrings = (...strings) => {
  return strings.join("");
};

// module.exports = concatStringElements;
