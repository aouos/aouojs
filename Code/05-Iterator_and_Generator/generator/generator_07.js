function* fib(n) {
  let cur = 0;
  let next = 1;
  while (n--) {
    yield cur;
    [cur, next] = [next, cur + next];
  }
}

const fibArray = [...fib(8)];
console.log(fibArray);
// [0, 1, 1, 2, 3, 5, 8, 13]

console.log(fibArray[3]);
// 2