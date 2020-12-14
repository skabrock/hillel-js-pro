function nextUniq(year) {
  while (new Set([...(year + "")]).size !== 4) {
    year++;
  }

  return year;
}

console.log(nextUniq(2019)); // 2019
console.log(nextUniq(2021)); // 2031
console.log(nextUniq(1900)); // 1902
console.log(nextUniq(1931)); // 1932
console.log(nextUniq(1290)); // 1293
console.log(nextUniq(2000)); // 2012
