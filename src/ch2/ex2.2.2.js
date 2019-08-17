const numbers0 = [];
for (let i = 0; i < 100; ++i) {
  numbers0[i] = i + 1;
}
console.log(numbers0.length); // 100

const numbers1 = [1, 2, 3, 4, 5];
const sum1 = numbers1[0] + numbers1[1] + numbers1[2] + numbers1[3] + numbers1[4];
console.log(sum1) // 15

const numbers2 = [1, 2, 3, 5, 8, 13, 21];
let sum2 = 0;
for (let i = 0; i < numbers2.length; ++i) {
  sum2 = sum2 + numbers2[i];
}
console.log(sum2);
