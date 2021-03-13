// https://www.codewars.com/kata/5c743cec901022438549964a

const createIterator = (array) => ({
  index: 0,
  next() {
    if (this.index < array.length) {
      return { value: array[this.index++], done: false };      
    }
    else {
      return { value: undefined, done: true };
    }
  }
});
