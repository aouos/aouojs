function* generatorFn(n) {
  while (true) {
    yield 'success';
  }
}

const genFn = generatorFn();
console.log(genFn.next());
// { value: 'success', done: false }

genFn.throw(new Error('faild'));
// Error: faild

console.log(genFn.next());