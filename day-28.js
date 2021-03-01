// http://www.codewars.com/kata/a-function-within-a-function

function always (n) {
  return () => n;
}

// https://www.codewars.com/kata/singleton-pattern/train/javascript

function Singleton() {
  const instance = Singleton.instance;
  return instance ? instance : Singleton.instance = this;
}
