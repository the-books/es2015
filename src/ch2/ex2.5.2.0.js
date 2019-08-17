function curve(grade) {
  return grade = grade + 5;
}

const grades = [77, 65, 81, 92, 83];
const newGrades = grades.map(curve);
console.log(newGrades); // [ 82, 70, 86, 97, 88 ]

function first(word) {
  return word[0];
}

const words = ["for", "your", "information"];
const acronym = words.map(first);
console.log(acronym); // [ 'f', 'y', 'i' ]
