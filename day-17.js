// http://www.codewars.com/kata/5731861d05d14d6f50000626

 function bigToSmall(arr){
  const result = [].concat(...arr).sort((a,b)=>b-a).join('>');
  return result;
}
  
// http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++)
    newArr.push((arr[i] % 10) + Number((arr[i + 1] + '')[0]));
  return newArr.reduce((a, b) => a * b);
}

// http://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  return !Array.isArray(arr)
    ? 'It's a fake array'
    : arr.includes(5) && arr.includes(13)
    ? 'It's a black array'
    : 'It's a white array';
}

// https://www.codewars.com/kata/array-number-reduce/train/javascript



