function makeAdder(x) {
  function add(y) {
    return y + x;
  }

  return add;
}
var plusFour = makeAdder(4);
console.log(plusFour(10));
console.log(plusFour(40));
