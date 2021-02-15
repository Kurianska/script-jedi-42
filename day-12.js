// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  const set1 = new Set(s1);
  const set2 = new Set(s2);
  return (s1, s2) =>
    set1.size === set2.size && [...set1].every((value) => set2.has(value));
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2)
}
