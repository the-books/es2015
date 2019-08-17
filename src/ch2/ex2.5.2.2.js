function passing(num) {
  return num >= 60;
}

const grades = [];
for (let i = 0; i < 20; ++i) {
  grades[i] = Math.floor(Math.random() * 101);
}
console.log(grades); // [ 96, 78, 76, 21, 45, 39, 70, 10, 38, 46, 89, 42, 26, 38, 8, 100, 29, 44, 73, 86 ]

const passGrades = grades.filter(passing);
console.log(passGrades); // [ 96, 78, 76, 70, 89, 100, 73, 86 ]
