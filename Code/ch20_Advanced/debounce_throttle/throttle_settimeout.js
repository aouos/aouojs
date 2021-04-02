function throttle(fn, delay) {
  let valid = true;
  return function () {
    if (!valid) {
      return;
    }
    valid = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      valid = true;
    }, delay);
  }
}