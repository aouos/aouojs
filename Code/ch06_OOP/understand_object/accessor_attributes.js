let book = {
  name: 'JavaScript',
  _year: 2014,
  edition: 6
}

Object.defineProperty(book, "year", {
  get() {
    return this._year;
  },
  set(value) {
    if (value > this._year) {
      this.edition += value - this._year;
      this._year = value;
    }
  }
})

book.year = 2020;
console.log(book);
// { name: 'JavaScript', _year: 2020, edition: 12 }