function calc(num1, num2, fn) {
  return fn(num1, num2);
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

console.log(calc(30, 12, add));
// 42

console.log(calc(30, 18, sub));
// 12
