const cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
const dmpDept = ["Raymond", "Cynthia", "Bryan"];

let itDiv = cisDept.concat(dmpDept);
console.log(itDiv); // ["Mike", "Clayton", "Terrill", "Danny", "Jennifer", "Raymond", "Cynthia", "Bryan"]

itDiv = dmpDept.concat(cisDept);
console.log(itDiv); // ["Raymond", "Cynthia", "Bryan", "Mike", "Clayton", "Terrill", "Danny", "Jennifer"]


const itDiv1 = ["Mike", "Clayton", "Terrill", "Raymond", "Cynthia", "Danny", "Jennifer"];
const dmpDept1 = itDiv1.splice(3,3);
console.log(dmpDept1); // ["Raymond", "Cynthia", "Danny"]
console.log(itDiv1); // ["Mike", "Clayton", "Terrill", "Jennifer"]
