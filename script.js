//make structures

class Book {
  constructor(
    title = "unknown",
    author = "unknown",
    pages = "0",
    read = "false"
  ) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.read = read);
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    this.books.push(newBook);
  }
  deleteBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
  restackBookshelf() {
    this.books.forEach((book) => {
      console.log(book);
    });
  }
}
let books;
let myLibrary = new Library();

let harry = new Book("hey", "aut", "123", "false");
myLibrary.addBook(harry);

myLibrary.restackBookshelf();
