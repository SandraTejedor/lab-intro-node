class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }
  get(pos) {
    this.items.sort((a, b) => a - b)
    if (this.items.length < pos) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }
  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }

    return Math.max(...this.items);
  }
  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }

    return Math.min(...this.items);
  }
  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.items.length
  }
  sum() {
    let sum = 0
    if (this.items.length == 0) {
      return 0
    }
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i]
    }
    return sum
  }
};

module.exports = SortedList;