// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...numArr) => {
    for (let i=0; i < numArr.length; i++) {
      [arr[numArr[i][0]], arr[numArr[i][1]]] = [arr[numArr[i][1]], arr[numArr[i][0]]];
    }
    return arr;
}


// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  switch (direction) {
    case (direction = 'left'):
      console.log(arr.concat(arr.splice(0, steps)));
      break;
    case (direction = 'right'):
      console.log(arr.reverse().splice(0, steps).concat(arr.reverse()));
      break;
    default:
      steps > arr.length;
  }
}
 

// http://www.codewars.com/kata/572af273a3af3836660014a1

