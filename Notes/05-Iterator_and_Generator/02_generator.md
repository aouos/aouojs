# Generator



### 生成器函数

生成器是 `ES6` 新增的一个结构，拥有在一个函数块内暂停和恢复代码执行的能力。可以理解Generator函数是一个状态机，封装了多个内部状态。

生成器一开始处于暂停执行的状态，返回一个迭代器对象，只会在初次调用 `next()` 方法后执行。 `next()` 方法返回值中 `value` 是生成器函数的返回值，默认为 `undefined` ， `done` 为布尔值，表示遍历是否结束。



---



### 生成器函数声明

生成器的形式是一个函数，函数名称前面加一个（*）表示是一个生成器，星号不受两侧空格的影响，只要是可以定义函数的地方就可以定义生成器，箭头函数不能用来定义生成器函数。

```js
function* generatorFn() {
  console.log("I'm aouos");
}

let generatorFn = function* () { }
```



---



### yield中断执行

遇到 `yield` 关键字执行会停止，但是函数作用域的状态会被保留。可以通过调用 `next()` 方法恢复执行。

```js
function* generatorFn() {
  yield 'Hello';
  yield 'World';
  return 'aouos'
}

const genFn = generatorFn();

console.log(genFn.next());
// { value: 'Hello', done: false }

console.log(genFn.next());
// { value: 'World', done: false }

console.log(genFn.next());
// { value: 'aouos', done: true }

console.log(genFn.next());
// { value: undefined, done: true }
```



---



### for...of 循环

使用 `for...of` 循环可以自动遍历Generator函数运行时生成的 `Iterator` 对象，不必显式调用 `next()` 方法。

```js
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
```



除了 `for...of` 循环以外，扩展运算符 `...` 、解构赋值和 `Array.from` 方法内部调用的，都是遍历器接口。

```js
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
```



---



### 提前终止生成器

一个实现 `Iterator` 接口的对象一定有 `next()` 方法，还有一个可选的 `return()` 方法用于提前终止迭代器。还有第三个方法：`throw()`。`return()` 和 `throw()` 方法都可以用于强制生成器进入关闭状态。

`return()` 方法会强制生成器进入关闭状态。提供给 `return()` 方法的值，就是终止迭代器对象的值

```js
function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const genFn = generatorFn();

console.log(genFn.next());
// { value: 1, done: false }

console.log(genFn.return(4));
// { value: 4, done: true }

console.log(genFn.next());
// { value: undefined, done: true }
```



`throw()` 方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭，内部处理了这个错误，那么就不会关闭，还可以恢复执行。

```js
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
```



内部进行错误处理后可以恢复执行

```js
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
```



---



### generator应用



#### 斐波那契数列

```js
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
```

