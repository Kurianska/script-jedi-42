// http://www.codewars.com/kata/571f832f07363d295d001ba8

function trueOrFalse(val) {
  if (val == false || val == undefined) return "false";
  else return "true";
}

// http://www.codewars.com/kata/57202aefe8d6c514300001fd

function saleHotdogs(n){
  return n < 5 ? n*100 : n < 10 ? n*95 : n*90;
}

// http://www.codewars.com/kata/572059afc2f4612825000d8a

function howManydays(month) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      return 31;
  }
}
