function afterC(str) {
  if (str.indexOf("cie") > -1) {
    return true;
  }
  return false;
}

const words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
misspelled = words.filter(afterC);
console.log(misspelled); // [ 'recieve', 'percieve', 'concieve' ]
