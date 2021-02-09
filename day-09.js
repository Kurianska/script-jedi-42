// http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  const itemMin = arr.reduce(function (shortest, currentWord) {
    return currentWord.length < shortest.length ? currentWord : shortest;
  });
  const result = arr.map((item) => item.slice(0, itemMin.length));
  return result;
}

// http://www.codewars.com/kata/57277a31e5e51450a4000010
