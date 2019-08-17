function isEven(num) {
  return num % 2 === 0;
}

function isOdd(num) {
  return num % 2 !== 0;
}

const numbers = [];
for (let i = 0; i < 20; ++i) {
  numbers[i] = i + 1;
}

const evens = numbers.filter(isEven);
console.log(evens); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

const odds = numbers.filter(isOdd);
console.log(odds); // [ 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 ]
