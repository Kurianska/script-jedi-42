// http://tddbin.com/#?kata=es6/language/array-api/from

// 29: array - `Array.from` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.from` converts an array-like object or list into an Array', () => {
  const arrayLike = {0: 'one', 1: 'two', length: 2};
  it('call `Array.from` with an array-like object', function() {
    const arr = Array.from(arrayLike);
    assert.deepEqual(arr, ['one', 'two']);
  });
  it('a DOM node`s classList object can be converted', function() {
    const domNode = document.createElement('span');
    domNode.classList.add('some');
    domNode.classList.add('other');
    const classList = Array.from(domNode.classList);
    assert.equal(''+classList, ''+['some', 'other']);
  });
  it('convert a NodeList to an Array and `filter()` works on it', function() {
    const nodeList = document.createElement('span');
    const divs = Array.from(nodeList).filter((node) => node.tagName === 'div');
    assert.deepEqual(divs.length, 0);
  });
  describe('custom conversion using a map function as second param', () => {
    it('we can modify the value before putting it in the array', function() {
      const arr = Array.from(arrayLike, (value) => value.toUpperCase());
      assert.deepEqual(arr, ['ONE', 'TWO']);
    });
    it('and we also get the object`s key as second parameter', function() {
      const arr = Array.from(arrayLike, (value, key) => `${key}=${value}`);
      assert.deepEqual(arr, ['0=one', '1=two']);
    });
  });
});

// http://tddbin.com/#?kata=es6/language/array-api/of

// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    const arr = Array.of(10);
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    const arr = Array.of(1, 2);
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of(starter, ...end);
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});

//  http://tddbin.com/#?kata=es6/language/array-api/fill

// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.fill` can fill up an array with one value', () => {
  it('`fill(0)` will populate `0` into each array element', function() {
    const arr = new Array(3).fill(0);
    assert.deepEqual(arr, [0, 0, 0]);
  });
  it('fill only changes content, adds no new elements', function() {
    const arr = [].fill(0);
    assert.deepEqual(arr, []);
  });
  it('second parameter to `fill()` is the position where to start filling', function() {
    const fillPosition = 2;
    const arr = [1,2,3].fill(42, fillPosition);
    assert.deepEqual(arr, [1, 2, 42]);
  });
  it('third parameter is the position where filling stops', function() {
    const fillStartAt = 1;
    const fillEndAt = 2;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    assert.deepEqual(arr, [1, 42, 3]);
  });
});


// http://tddbin.com/#?kata=es6/language/array-api/find

// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    const found = [true].find(x => x=true);
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    const found = [0, 2].find(item => item > 1);
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    const found = [1, 2, 3].find(item => item === 4);
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name: value}) => value === 'Alice');
    assert.equal(found, alice);
  });
});


// http://tddbin.com/#?kata=es6/language/array-api/findIndex


