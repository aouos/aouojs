function foo(count) {
  function bar(num) {
    return count + num;
  }

  return bar;
}

var fn = foo(3);

console.log(fn(5));
// 8
