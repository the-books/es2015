function curve(arr, amount) {
  for (var i = 0; i < arr.length; ++i) {
    arr[i] += amount;
  }
}

const grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades); // [82, 78, 79, 86, 95]
