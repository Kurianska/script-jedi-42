// http://www.codewars.com/kata/duplicate-arguments

function solution(...args) {
  return [...args].sort().some((cur, i, arr) => cur === arr[i + 1]);
}


//  http://www.codewars.com/kata/last

function last(...args){
const last = args[args.length - 1];
  return last[last.length - 1] || last;
}
