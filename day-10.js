// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const result = str.toUpperCase();
  return result.replace(/\w\b/g, (x) => x.toLowerCase());
}

// http://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str) {
  let s = str
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt() - 3))
    .join('');
  s = s.match(/[a-z]/gi).join('');
  return s;
}

// http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
