// https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

// http://www.codewars.com/kata/replicate-new

function nouveau(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);
  return result && (typeof result === 'object' || typeof result === 'function')
    ? result
    : instance;
}
