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

  insert(element, after) {
    const insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

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
