// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  let str;
  switch (!isNaN(n) && n) {
    case Number.MAX_VALUE:
      str = 'Input number is Number.MAX_VALUE';
      break;
    case Number.MIN_VALUE:
      str = 'Input number is Number.MIN_VALUE';
      break;
    case false:
      str = 'Input number is Number.NaN';
      break;
    case -Infinity:
      str = 'Input number is Number.NEGATIVE_INFINITY';
      break;
    case Infinity:
      str = 'Input number is Number.POSITIVE_INFINITY';
      break;
    default:
      str = 'Input number is ' + n;
  }
  return str;
}


// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r,g,b){
  r.toString(16).length < 2 ? r = '0' + r.toString(16) : r = r.toString(16);
  g.toString(16).length < 2 ? g = '0' + g.toString(16) : g = g.toString(16);
  b.toString(16).length < 2 ? b = '0' + b.toString(16) : b = b.toString(16);
  
  return '#' + r + g + b;
}

// http://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  const newArr = [];
  for (let el of arr) {
    let i = +el.toFixed(2);
    newArr.push(i);
  }
  const count = newArr.filter((i) => i < n);
  return count.length;
}
