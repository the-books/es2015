class List {
  
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  remove(element) {
    const foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  insert() {}
  clear() {}
  contains() {}
  front() {}
  end() {}
  prev() {}
  next() {}
  currPos() {}
  moveTo() {}
  getElement() {}
}

const names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString()); // [ 'Cynthia', 'Raymond', 'Barbara' ]

names.remove("Raymond");
console.log(names.toString()); // [ 'Cynthia', 'Barbara' ]
