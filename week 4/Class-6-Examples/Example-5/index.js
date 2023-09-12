class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
  get ageDisplay() {
    return this.age;
  }
  set ageSetter(value) {
    if (value < 0) {
      console.log("Age Invalid");
    } else {
      this.age = value;
    }
  }
}

const test1 = new Person("Jim", 42);

const test2 = new Person("Butcher", 70);
