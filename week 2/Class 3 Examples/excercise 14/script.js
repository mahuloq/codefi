let num = prompt("Enter a number");

if (isNaN(num)) {
  console.log("You did not enter a number");
} else if (num == 0) {
  console.log("Number is zero");
} else if (num > 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}
