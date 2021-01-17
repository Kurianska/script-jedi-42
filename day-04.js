// https://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return [odd, even];
}
