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
