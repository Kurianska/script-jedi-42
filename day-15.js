// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

const shuffleIt = (arr, ...numArr) => {
    for (let i=0; i < numArr.length; i++) {
      [arr[numArr[i][0]], arr[numArr[i][1]]] = [arr[numArr[i][1]], arr[numArr[i][0]]];
    }
    return arr;
}


// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

