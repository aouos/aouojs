function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

console.log([...generatorFn()]);
// [ 1, 2, 3, 4 ]

console.log(Array.from(generatorFn()));
// [ 1, 2, 3, 4 ]

const [a, b, c, d] = generatorFn();
console.log(a, b, c, d);
// 1 2 3 4