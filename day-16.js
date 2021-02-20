// http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const myArr = arr.slice().sort((a,b)=>{
  const itemA = arr.filter(i => i === a).length;
  const itemB = arr.filter(i => i === b).length;
  if (itemA === itemB) return b-a;
  if (itemA > itemB) return 1;
  return -1;
  })
  return myArr;
}

// http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  const myArr = arr.map((i) => {
    return i.length % 2 === 0
      ? i.slice(0, i.length / 2) + "|" + i.slice(i.length / 2)
      : i.slice(0, i.length / 2) + "|" + i.slice(i.length / 2 + 1);
  });
  return myArr;
}

// http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const obj = {
    S: scores.filter((x) => x === 100).length,
    A: scores.filter((x) => x < 100 && x >= 90).length,
    B: scores.filter((x) => x < 90 && x >= 80).length,
    C: scores.filter((x) => x < 80 && x >= 60).length,
    D: scores.filter((x) => x < 60 && x >= 0).length,
    X: scores.filter((x) => x == -1).length,
  };
  return obj;
}

// http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].toString().split("").reverse().join("") === arr[i + 1].toString()
    )
      return [arr[i], arr[i + 1]];
  }
  return [-1, -1];
}
