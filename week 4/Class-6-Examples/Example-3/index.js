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

const test2 = new Person("Butcher", 70);
