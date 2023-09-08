function setupCounter() {
  let count = 0;
  return function () {
    increment: return count++;
    decrease: return count--;
    getCount: return count;
  };
}

let counter = setupCounter();
