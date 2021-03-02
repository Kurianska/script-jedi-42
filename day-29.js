// https://www.codewars.com/kata/how-new-works

const myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

// http://www.codewars.com/kata/replicate-new
