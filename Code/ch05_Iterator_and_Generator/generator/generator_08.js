function* generatorFn(n) {
  while (true) {
    try {
      yield 'success';
    } catch (e) {
      console.log(e.message);
    }
  }
}

const genFn = generatorFn();
console.log(genFn.next());
// { value: 'success', done: false }

genFn.throw(new Error('faild'));
// faild

console.log(genFn.next());
// { value: 'success', done: false }