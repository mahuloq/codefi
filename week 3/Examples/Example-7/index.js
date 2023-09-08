function setupCounter() {
  let count = 0;
  return function () {
    increment: return count++;
  };
}

let counter = setupCounter();
