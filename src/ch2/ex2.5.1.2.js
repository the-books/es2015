function isEven(num) {
  return num % 2 === 0;
}

const allOdds = [1, 3, 5, 7, 9];
console.log(allOdds.some(isEven)); // false

const notAllOdds = [1, 3, 5, 7, 10];
console.log(notAllOdds.some(isEven)); // true
