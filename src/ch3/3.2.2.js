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

  remove() {}
  length() {}
  toString() {}
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
