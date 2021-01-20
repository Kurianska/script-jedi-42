// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  sub = body.substr(body.length - tail.length);
  return sub === tail ? true : false;
}
