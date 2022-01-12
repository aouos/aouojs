function add() {
  console.log(this);
}

var obj = {
  message: 'hello',
};

// 使用 bind 显式绑定
var fn = add.bind(obj);

// 多次调用
fn();
fn();
fn();
fn();
