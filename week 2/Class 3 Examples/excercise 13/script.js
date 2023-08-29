let arr1 = [];

let num1 = Math.ceil(prompt("Enter Starting )Number"));
let num2 = prompt("Enter length of Array");
let value = num1;

for (let i = 0; i <= num2; i++) {
  arr1.push(value);
  value += num1;
}

console.log(arr1);
