function sumUntil(maxValue) {
  let sum = 0
  for (let index = 0; index <= maxValue; index++) {
    sum = sum + index;
  }
  return sum;
}

console.log(sumUntil(5));