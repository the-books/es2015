const numbers = [1, 2, 3, 4, 5];

numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

const names = ["David", "Mike", "Cynthia", "Clayton", "Bryan", "Raymond"];
names.sort();
console.log(names); // ["Bryan", "Clayton", "Cynthia", "David", "Mike", "Raymond"]


const someNumbers = [3, 1, 2, 100, 4, 200];
someNumbers.sort();
console.log(someNumbers); // [1, 100, 2, 200, 3, 4]

function compare(num1, num2) {
  return num1 - num2;
}
someNumbers.sort(compare);
console.log(someNumbers); // [1, 2, 3, 4, 100, 200]
