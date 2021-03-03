//  http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  const func = this;
  return function (...arg) {
    const rigthCtx = this === global ? ctx : this;
    return func.apply(rigthCtx, arg);
  };
};

// https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function(people){
  return people.slice().sort((a, b) => a.age-b.age);
}
