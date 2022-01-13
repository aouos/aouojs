function foo() {
  console.log(this);
}

var bar = foo.bind('code');

var obj = new bar();
// foo {}
