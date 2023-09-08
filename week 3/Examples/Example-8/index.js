function setupCounter() {
  let count = 0;
  return function () {
    if (count === 11) {
      count = 0;
      console.log("Reset Count");
    } else {
      increment: return count++;
    }
  };
}

let counter = setupCounter();
