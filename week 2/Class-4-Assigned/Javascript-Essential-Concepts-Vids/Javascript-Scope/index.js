// //Global Scope
// let game = "Sonic";

// console.log(game);

// scopes = () => {
//   console.log(game);
// };

// //Local Scope

// let a = function () {
//   let game = "Sonic"; //local variable and functional scope
//   console.log(game);
// };

// a();

// if (true) {
//   let game = "Mario";
//   console.log(game);
// }

let firstName = "James";

output = () => {
  let firstName = "John";
  let lastName = "Smith";
  let age = "20";
  let country = "England";
  console.log(
    `${firstName} ${lastName} is ${age} years old and lives in ${country}.`
  );
};
output();
