Array.matrix = function(numRows, numCols, initial) {
  const arr = [];
  for (let i = 0; i < numRows; ++i) {
    const columns = [];
    for (let j = 0; j < numCols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

const numbers = Array.matrix(5, 5, 0);
console.log(numbers[1][1]); // 0

const names = Array.matrix(3, 3, "Joe");
console.log(names[1][2]); // "Joe"
