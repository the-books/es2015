const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.pop();
console.log(numbers); // [1, 2, 3, 4]

numbers.shift();
console.log(numbers); // [2, 3, 4]

const first = numbers.shift();
numbers.push(first);
console.log(numbers); // [3, 4, 2]
