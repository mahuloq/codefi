let data;

let userInput = (
  name = prompt("Enter Name of User"),
  age = prompt(`Enter age of User`),
  occupation = prompt(`Enter occupation of User`)
) => {
  let info = { Name: name, Age: age, Occupation: occupation };
  newObj = info;

  //   for (i = 0; i < Object.keys(data).length; i++) {
  //     console.log(data.user1);
  //   }
};

userInput();

// let keysAndValues1 = { a: 1, b: 2, c: 3 };

// let keysAndValues2 = { a: "Apple", b: "Microsoft", c: "Google" };

// let keysAndValues3 = { key1: true, key2: false, key3: undefined };

let sorted = (object) => {
  let data = Object.keys(object);

  for (i = 0; i < data.length; i++) {
    newData = data[i];
    console.log(object[newData]);
  }
};
