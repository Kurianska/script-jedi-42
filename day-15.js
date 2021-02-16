// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...numArr) => {
    for (let i=0; i < numArr.length; i++) {
      [arr[numArr[i][0]], arr[numArr[i][1]]] = [arr[numArr[i][1]], arr[numArr[i][0]]];
    }
    return arr;
}


// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  while (steps <= arr.length) {
    for (el of arr) {
      switch (direction) {
        case (direction = "left"):
          let removedLeft = arr.splice(0, steps);
          return arr.concat(removedLeft);
          break;

        case (direction = "right"):
          let removedRight = arr.reverse().splice(0, steps);
          return removedRight.concat(arr.reverse());
          break;
      }
    }
  }
}

