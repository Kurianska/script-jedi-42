// http://www.codewars.com/kata/duplicate-arguments



//  http://www.codewars.com/kata/last

function last(list) {
  const last = arguments[arguments.length - 1]
  return last[last.length - 1] || last
