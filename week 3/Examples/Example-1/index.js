function outer() {
  let outervar = "Im Out";

  function innerF() {
    let innerVar = "Im Inside";
    console.log(outervar);
    console.log(innerVar);
  }
  innerF();
}

outer();

// Outer is a global function, and was accessed at top level, inner is nester 1 deep and is called at the same level. the console log in inner is working becuase it can pull data from levels above it.
