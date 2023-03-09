function countSheeps(arrayOfSheep) {
  let sum = 0;
  arrayOfSheep.forEach((element) => {
    if (element === true) {
      sum++;
    }
  });
  return sum;
}
