// http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
  return this.name = `${first} ${last}`;
}

// https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      const words = name.toString().split(" ");
      if (words[0] && words[1]) {
        this.firstName = words[0];
        this.lastName = words[1];
      }
    },
  };
}
