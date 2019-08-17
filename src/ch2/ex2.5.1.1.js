function isEven(num) {
  return num % 2 === 0;
}

const allEvens = [2, 4, 6, 8, 10];
console.log(allEvens.every(isEven)); // true

const notAllEvens = [2, 4, 5, 8, 10];
console.log(notAllEvens.every(isEven)); // false
