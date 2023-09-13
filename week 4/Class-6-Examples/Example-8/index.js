class Students {
  constructor(name, grade) {
    // this.storage = [{ name: (this.name = name), grade: (this.grade = grade) }];
    this.name = name;
    this.grades = [(this.grade = grade)];
  }
  browse() {
    console.log(this.grades);
  }

  store(value) {
    this.grades.push(value);
  }

  remove() {
    this.grades.pop();
  }
  getAv() {
    let sum = 0;
    this.grades.forEach((element) => {
      sum += element;
    }, this);
    return sum;
  }
}

let matt = new Students("matt", 85);
// let jim = new Students("jim", "A");
// let james = new Students("james", "A");
// let mark = new Students("mark", "A");
// let kylie = new Students("kylie", "A");
