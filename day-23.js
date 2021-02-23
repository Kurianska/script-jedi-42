// http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
  return func(...args);
}

// http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...args) {
  return [...args].every((arg) => typeof arg === 'number');
}
