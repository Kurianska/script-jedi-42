// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const result = str.toUpperCase();
  return result.replace(/\w\b/g, (x) => x.toLowerCase());
}

// http://www.codewars.com/kata/57284d23e81185ae6200162a

const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))

//question1: The top secret file number is...
answer1="2912";
//question2: Super agent's name is...
answer2="WsNSq";
//question3: He stole the treasure is...
answer3="Apple core";

// http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
}
