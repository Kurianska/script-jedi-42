// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  const result = str.toUpperCase();
  return result.replace(/\w\b/g, (x) => x.toLowerCase());
}

// http://www.codewars.com/kata/57284d23e81185ae6200162a
