let keysAndValues1 = { a: 1, b: 2, c: 3 };

let keysAndValues2 = { a: "Apple", b: "Microsoft", c: "Google" };

let keysAndValues3 = { key1: true, key2: false, key3: undefined };

let sorted = (object) => {
  let data = Object.keys(object);
  console.log(data);
  data = data.sort();
  console.log(data);
  console.log(data.length);

  for (i = 0; i < data.length; i++) {
    console.log(data);
    newData = data[i];
    console.log(object[newData]);
  }
};
