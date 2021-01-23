// http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  let count = 0;
  while (count < n) {
    count % 2 === 0 ? (str = "*" + str) : (str += "*");
    count++;
  }
  return str;
}


// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}

// http://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  let bag = [];
  for (let el in dolls) {
    if (dolls[el] === "Hello Kitty" || dolls[el] === "Barbie doll") {
      bag.push(dolls[el]);
    }
    if (bag.length === 3) {
      break;
    }
    continue;
  }
  return bag;
}

// http://www.codewars.com/kata/5722b3f0bd5583cf44001000

function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5) {
      arr.push(key);
    }
    if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
