function throttle(fn, delay) {
  let last = Date.now();
  return function () {
    const now = Date.now();
    if (now - last < delay) {
      return;
    }
    fn.apply(this, arguments);
    last = now;
  }
}