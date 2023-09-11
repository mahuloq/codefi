// var btn = document.getElementById("myBtn");
// btn.addEventListener("click", mAdd);

function makeAdder(x) {
  function add(y) {
    return y + x;
  }

  return add;
}

function mAdd() {
  number = parseInt(prompt("Enter Number"));
  plusNum = makeAdder(number);
  console.log(plusNum(10));
  console.log(plusNum(40));
}
