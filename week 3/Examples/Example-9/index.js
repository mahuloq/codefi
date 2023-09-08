let globalVar = "Global Var Original";
console.log(globalVar);
function globalMod() {
  let globarVars = (globalVar = "Global Var Changed");
  return function () {
    console.log(globalVars);
  };
}
globalMod();
console.log(globalVar);

function localMod() {
  console.log(localVar);
  localVar = "Local Var Changed";
  console.log(localVar);
  var localVar;
}

localMod();
