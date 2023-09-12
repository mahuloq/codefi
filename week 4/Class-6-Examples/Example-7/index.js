class Library {
  #isbn;
  constructor(isbn, title, author, yearPublished) {
    this.#isbn = isbn;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
  store() {
    isbn: this.#isbn;
    title: this.title;
    author: this.author;
    published: this.yearPublished;
  }
}

let test1 = new Library(1234, "Avatar", "Bob", 1989);
