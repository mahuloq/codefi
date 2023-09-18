class Subject {
  constructor() {
    this.observers = [];
  }
  addObserver(value) {
    this.observers.push(value);
  }

  removeObserver(fn) {
    this.observers = this.observers.filter(function (test) {
      return test !== fn;
    });
  }
  // removeObserver(observer)
  // this.observers = this.observers.filter(sub => sub !== observer)

  notifyObserverse() {
    this.observers.forEach((sub) => sub.update());
  }
}

// this.observers.forEach(sub => sub.update())

class Observer {
  update() {
    console.log("Observer updated!");
  }
}

let testSubject = new Subject();

let obs1 = new Observer();

let obs2 = new Observer();

let obs3 = new Observer();

let obs4 = new Observer();
