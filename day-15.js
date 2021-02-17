// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...numArr) => {
    for (let i=0; i < numArr.length; i++) {
      [arr[numArr[i][0]], arr[numArr[i][1]]] = [arr[numArr[i][1]], arr[numArr[i][0]]];
    }
    return arr;
}


// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
      if (direction == 'left') {
        arr.push(arr.shift());
      } else {
        arr.unshift(arr.pop());
      }
    }
  return arr;
}

// http://www.codewars.com/kata/572af273a3af3836660014a1

//http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    newArr.push(arr.slice(i, i + 3).reduce((a, b) => a + b));
  }
  return newArr;
}
