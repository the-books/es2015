const names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
const name = "Jennifer";
const position = names.indexOf(name);

if (position > 0) {
  console.log(`Found ${name} at position: ${position}`);
}
else {
  console.log(`${name} not found in array.`)
}


const names1 = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
const name1 = "Mike";
console.log(`First found ${name1} at position ${names1.indexOf(name1)}`);
console.log(`First found ${name1} at position ${names1.lastIndexOf(name1)}`);
