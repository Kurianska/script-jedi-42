// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  sub = body.substr(body.length - tail.length);
  return sub === tail ? true : false;
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  return "£" + (bonus ? salary * 10 : salary);
}

// https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  let p = n * n;
  let pstr = String(p),
    nstr = String(n);
  let lengthp = pstr.length,
    lengthn = nstr.length;
  result = pstr.substr(lengthp - lengthn, lengthn);
  return result === nstr ? "Automorphic" : "Not!!";
}

