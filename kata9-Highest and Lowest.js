function highAndLow(n) {
  n = n.split(" ");
  return `${Math.max.apply(null, n)} ${Math.min.apply(null, n)}`;
}
