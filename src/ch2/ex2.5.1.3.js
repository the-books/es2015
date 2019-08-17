function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(add);
console.log(sum); // 55

function concat(accumulatedString, item) {
  return accumulatedString + item;
}

const words = ["the ", "quick ", "brown ", "fox "];
const sentence = words.reduce(concat);
console.log(sentence); // "the quick brown fox "

const sentenceRight = words.reduceRight(concat);
console.log(sentenceRight); // "fox brown quick the "
