const bookshelf = document.querySelector(".bookshelf");

console.log(bookshelf);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? "already read" : "not read yet"
    }`;
  };
}

let harry = new Book("Harry Potter", "J.K. Rowling", "295", "Read");
myLibrary.push(harry);

let createBookWindow = (bookInfo) => {
  console.log(bookInfo);

  let newsd = document.createElement("div");
  newsd.classList.add("book");
  newsd.appendChild(document.createElement("div"));
  let title = document.createElement("h2");
  title.classList.add("book.title");
  title.innerText = `${bookInfo.title}`;
  newsd.appendChild(title);

  let author = document.createElement("p");
  author.classList.add("book-author");
  author.innerText = `${bookInfo.author}`;
  newsd.appendChild(author);

  let pages = document.createElement("p");
  pages.classList.add("book-pages");
  pages.innerText = `${bookInfo.pages}`;
  newsd.appendChild(pages);

  let read = document.createElement("button");
  read.classList.add("button-read");
  read.innerText = `${bookInfo.read}`;
  newsd.appendChild(read);

  newsd.appendChild(document.createElement("div"));

  addBookToLibrary(newsd, bookshelf);
};

myLibrary.forEach((bookInfo) => createBookWindow(bookInfo));

function addBookToLibrary(newBook, bookshelf) {
  bookshelf.appendChild(newBook);
}
