function mainFunction() {
  makeAlert();
  function makeAlert() {
    alert("Hello");
  }
}

mainFunction();

//This worked becuase makeAlert() and the function are within the same scope, and the function is moved to the top of the scope
