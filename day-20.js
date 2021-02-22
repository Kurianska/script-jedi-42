// http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  let result = [];
  for (let i of count) {
    result.push(animals.split(i).length - 1);
  }
  return result;
}

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
  const regstr =
    word[0] + word.slice(1, -1).replace(/./g, '.') + word.slice(-1); 
  const reg1 = new RegExp('^' + regstr + '$');
  return str
    .split(' ')
    .filter(v => reg1.test(v))
    .join(' ');
}

// https://www.codewars.com/kata/573bca07dffc1aa693000139

const regex=/^(-?)9.*0000$/
