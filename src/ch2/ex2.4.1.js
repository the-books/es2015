const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]

numbers[numbers.length] = 7;
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]

numbers.unshift(100);
console.log(numbers); // [100, 1, 2, 3, 4, 5, 6, 7]

numbers.unshift(200, 300);
console.log(numbers); // [200, 300, 100, 1, 2, 3, 4, 5, …]
