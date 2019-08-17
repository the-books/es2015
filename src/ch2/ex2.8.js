class WeekTemps {
  constructor() {
    this.dataStore = [];
  }

  add(temp) {
    this.dataStore.push(temp);
  }

  average() {
    let total = 0;
    for (let i = 0; i < this.dataStore.length; ++i) {
      total = total + this.dataStore[i];
    }
    return total / this.dataStore.length;
  }
}

const thisWeek = new WeekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average()); // 54.875
