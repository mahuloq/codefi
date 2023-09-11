class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const test1 = new Person("Jim", 42);
console.log(test1);
test1.greet();

const test2 = new Person("Butcher", 70);
console.log(test2);
test2.greet();
