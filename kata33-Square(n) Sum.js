function squareSum(numbers) {
  let sum = 0;
  numbers.forEach((x) => {
    sum += x * x;
  });
  return sum;
}
