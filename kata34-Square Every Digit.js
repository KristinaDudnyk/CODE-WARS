function squareDigits(num) {
  let numToString = new String(num);
  let numbers = numToString.split("");
  let result = numbers.map((x) => Number(x) * x);
  return +result.join("");
}
