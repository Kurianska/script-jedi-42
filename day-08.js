// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  let str;
  switch (!NaN && n) {
    case Number.MAX_VALUE:
      str = 'Input number is Number.MAX_VALUE';
      break;
    case Number.MIN_VALUE:
      str = 'Input number is Number.MIN_VALUE';
      break;
    case false:
      str = 'Input number is Number.NaN';

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
