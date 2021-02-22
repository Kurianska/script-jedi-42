// http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const result = [];
  for (let i of count) {
    result.push(animals.split(i).length - 1);
  }
  return result;
}

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
  const result = str
    .split(" ")
    .filter(
      (v) =>
        v.length === word.length &&
        v[0] === word[0] &&
        v[v.length - 1] === word[v.length - 1]
    )
    .join(" ");
  return result;
}

// https://www.codewars.com/kata/573bca07dffc1aa693000139

const regex=/^(-?)9.*0000$/
