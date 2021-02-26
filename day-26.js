//  http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
   return (childCxt = ctx) => this.call(childCxt, childCxt);
};

// https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function(people){
  return people.sort((a, b) => a.age-b.age);
}
