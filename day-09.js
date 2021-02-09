// http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  const itemMin = arr.reduce(function (shortest, currentWord) {
    return currentWord.length < shortest.length ? currentWord : shortest;
  });
  const result = arr.map((item) => item.slice(0, itemMin.length));
  return result;
}
