// https://www.codewars.com/kata/571edd157e8954bab500032d

var v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}

function equal2() {
  let a = v3;
  let b = v1;
  return a - b;
}
function equal3() {
  let a = v1;
  let b = v5;
  return a * b;
}
function equal4() {
  let a = v4;
  let b = v5;
  return a / b;
}
function equal5() {
  let a = v6;
  let b = v3;
  return a % b;
}

equal1();
equal2();
equal3();
equal4();


// http://www.codewars.com/kata/571edea4b625edcb51000d8e

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  return d1 + a2 + d2;
}
function Bee() {
  return b1 + e2 + e2;
}
function banana() {
  return b2 + a2 + n2 + a2 + n2 + a2;
}

function answer1() {
  return "no";
}
function answer2() {
  return "no";
}
function answer3() {
  return "yes";
}

// http://www.codewars.com/kata/571effabb625ed9b0600107a

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  arr.push(1);
  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

// http://www.codewars.com/kata/571f1eb77e8954a812000837

function animal(obj){
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

