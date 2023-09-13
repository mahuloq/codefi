class Library {
  constructor(book) {
    this.shelf = [(this.book = book)];
  }
  browse() {
    console.log(this.shelf);
  }

  store(value) {
    this.shelf.push(value);
  }

  remove() {
    this.shelf.pop();
  }
}

class Book {
  #isbn;
  constructor(isbn, title, author, yearPublished) {
    this.#isbn = isbn;
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
}

let test1 = new Book(1234, "Avatar", "Bob", 1989);
let test2 = new Book(1234, "James", "Bill", 1990);
let test3 = new Book(1234, "Cameron", "Borg", 1991);
let test4 = new Book(1234, "WhatTwist", "Boffer", 1992);

let testLib = new Library(test1);
