function chkPair(A, size, x) {
  for (i = 0; i < size - 1; i++) {
    for (j = i + 1; j < size; j++) {
      if (A[i] + A[j] == x) {
        document.write(
          "Pair with a given sum " + x + " is (" + A[i] + ", " + A[j] + ")"
        );

        return true;
      }
    }
  }

  return false;
}

function starter() {
  let A = prompt("Enter a string of numbers, seperated by commas.")
    .split(",")
    .map(Number);

  console.log(A);
  let x = prompt("Enter a Number");
  let size = A.length;

  if (chkPair(A, size, x)) {
    document.write("<br/>Valid pair exists");
  } else {
    document.write("<br/>No valid pair exists for " + x);
  }
}

starter();
