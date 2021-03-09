// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes

const obj = {
  description: 'TODO: GIVE ME A DESCRIPTION',
};

widget.__proto__ = Object.create(obj);
gadget.__proto__ = Object.create(obj);
thingamabob.__proto__ = Object.create(obj);


// https://www.codewars.com/kata/javascript-class-like-objects

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}
