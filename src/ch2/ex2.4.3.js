const numbers = [1, 2, 3, 7, 8, 9];
const newNumbers = [4, 5, 6];

numbers.splice(3, 0, 400, 500, 600);
console.log(numbers); // [1, 2, 3, 400, 500, 600, 7, 8, …]

numbers.splice(3, 3);
console.log(numbers); // [1, 2, 3, 7, 8, 9]
