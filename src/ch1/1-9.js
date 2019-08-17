function factorial(number) {
  let product = 1;
  for (let i = number; i >= 1; --i) {
    product *= i;
  }
  return product;
}

console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800
