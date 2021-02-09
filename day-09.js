// http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  const itemMin = arr.reduce((shortest, currentWord) =>
    currentWord.length < shortest.length ? currentWord : shortest
  );
  const result = arr.map((item) => item.slice(0, itemMin.length));
  return result;
}

// http://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str,c){
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

// http://www.codewars.com/kata/57280481e8118511f7000ffa
