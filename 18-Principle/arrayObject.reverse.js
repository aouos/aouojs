let arr = [2, 3, 4, 6];
// arr.reverse();

// The first way
Object.prototype.reverseArr = function () {
  let newArr = [];
  for (let i = this.length - 1; i >= 0; i--) {
    newArr.push(this[i]);
  }
  return newArr;
}

// The second way
Object.prototype.reverseArr = function () {
  for (let i = 0, j = this.length - 1; i < j; i++, j--) {
    let temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

console.log(arr.reverseArr()); // [ 6, 4, 3, 2 ]