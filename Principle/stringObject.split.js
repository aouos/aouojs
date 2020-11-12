const str = 'AouoPlus';
// let arr = str.split('uo');

String.prototype.strToArray = function() {
  let resArray = [];
  for(let i = 0; i < this.length; i++) {
    resArray.push(this[i]);
  }
  return resArray;
}

console.log(str.strToArray());