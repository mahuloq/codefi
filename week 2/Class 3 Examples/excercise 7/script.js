let number = prompt("Please enter a number", "Number Here");
let answer = 1;

for (let i = 1; i <= number; i++) {
  answer *= i;
}

alert(answer);
