let A = prompt("Enter a string of numbers, seperated by commas.")
  .split(",")
  .map(Number);
let n = A.length;
let j = 0;
for (let i = 0; i < n; i++) {
  if (A[i] != 0) {
    //   Swap - A[j] , A[i]
    swap(A, j, i); // Partitioning the array
    j++;
  }
}
for (let i = 0; i < n; i++) {
  document.write(A[i] + " "); // Print the array
}

// Utility function to swap two elements of an array
function swap(A, a, b) {
  let temp = A[a];
  A[a] = A[b];
  A[b] = temp;
}
