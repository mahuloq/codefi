class Subject {
  observers = [];

  subscribe(value) {
    this.observers.push(value);
  }

  unsubscribe(fn) {
    index = this.observers.indexOf(fn);
    this.observers.splice(index, 1);
  }

  notify() {
    this.observers.forEach((element) => {
      observer();
    });
  }
}
const subject = new Subject();

const observer = () => {
  console.log("This is an observer");
};

const observer2 = () => {
  console.log("This is an observer");
};

const observer3 = () => {
  console.log("This is an observer");
};

subject.subscribe(observer);

subject.subscribe(observer3);

subject.subscribe(observer2);

subject.notify();

// subject.unsubscribe(observer);

subject.notify();
