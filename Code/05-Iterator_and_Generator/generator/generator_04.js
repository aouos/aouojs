function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

const genFn = generatorFn();

for (const g of genFn) {
  console.log(g);
}
// 1
// 2
// 3
// 4