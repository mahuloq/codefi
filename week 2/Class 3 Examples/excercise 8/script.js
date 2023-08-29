let year = prompt("Enter a Year");

if (year % 400 == 0) {
  alert("This is a leap year!");
} else if (year % 4 == 0) {
  alert("This is a leap year");
} else alert("This is not a leap year");

location.reload();
