var message = 'AouoCode';

function foo() {
  console.log(message);
  // AouoCode
  // foo 的父级作用域为全局，与定义位置有关
}

function bar() {
  var message = 'Hi';

  foo();
}

bar();
