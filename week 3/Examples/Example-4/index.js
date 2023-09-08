let test = "original";

function modifyGlobal() {
  console.log(test);
  test = "changed";
  console.log(test);
}

function localScopeTest() {
  let test = "changed2";
  console.log(test);
}

modifyGlobal();
localScopeTest();
console.log(test);
