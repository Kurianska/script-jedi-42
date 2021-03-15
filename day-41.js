// https://www.codewars.com/kata/basics-generators-number-1/javascript

function* generator(n) {
  const count = 1;
  while (true) {
    yield count++;
  }
  return yield count;
}

// https://www.codewars.com/kata/5637ead70013386e30000027/

function* generator(a) {
  const b = 1;
  while(true) yield `${a} x ${b} = ${a*b++}`
}
