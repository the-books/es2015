const numbers1 = [];
console.log(numbers1.length); // 0

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2.length); // 5

const numbers3 = new Array();
console.log(numbers3.length); // 0

const numbers4 = new Array(1, 2, 3, 4, 5);
console.log(numbers4.length); // 5

const numbers5 = new Array(10);
console.log(numbers5.length); // 10

const objects = [1, "Joe", true, null];

const numbers = 3;
const array = [7, 4, 1776];
console.log(Array.isArray(numbers)); // false
console.log(Array.isArray(array)); // true
