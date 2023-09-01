const number = parseInt(prompt("Enter a number: "));
let prime = true;

if (number === 1) {
  console.log("Choose a different number");
} else if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }

  if (prime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
} else {
  console.log("The number is not a prime number.");
}
