var data = prompt("Enter a string of numbers, seperated by commas.")
  .split(",")
  .map(Number);

var res = data.filter(function (v) {
  return (
    data.filter(function (v1) {
      return v1 == v;
    }).length == 1
  );
});

console.log(res);
