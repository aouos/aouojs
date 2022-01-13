var obj = {
  message: 'hello',
  foo: function () {
    console.log(this);
  },
};

// obj.foo();
// obj

// 显式绑定优先级高于隐式绑定
obj.foo.call('code');
// [String: 'code']
