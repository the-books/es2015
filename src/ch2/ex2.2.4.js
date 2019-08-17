const numbers = [];
for (let i = 0; i < 10; ++i) {
  numbers[i] = i + 1;
}

// const sameNumbers = numbers;
// numbers[0] = 500;
// console.log(sameNumbers[0]);

const sameNumbers = numbers.slice();
numbers[0] = 500;
console.log(sameNumbers.length); // 10
console.log(sameNumbers[0]); // 1

console.log(numbers); // [500, 2, 3, 4, 5, 6, 7, 8, …]
console.log(sameNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, …]
