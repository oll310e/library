const bookshelf = document.querySelector(".bookshelf");
const container = document.querySelector(".container");

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

let dune = new Book("Dune", "Frank Herbert", "430", "Read");
let harry = new Book("Harry Potter", "J.K. Rowling", "295", "Read");
myLibrary.push(harry);
myLibrary.push(dune);

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
  read.classList.add("not-read");
  read.innerText = "Not Read";
  read.addEventListener("click", function () {
    if (read.classList.contains("not-read")) {
      read.classList.remove("not-read");
      read.innerText = "Read";
      read.classList.add("read");
    } else {
      read.classList.remove("read");
      read.innerText = "Not Read";
      read.classList.add("not-read");
    }
  });

  newsd.appendChild(read);

  newsd.appendChild(document.createElement("div"));

  let deleteButton = document.createElement("button");
  let i = document.createElement("i");
  i.classList.add("fa-solid", "fa-x", "deleteButton");
  i.addEventListener("click", (e) => {
    removeBook(e.target.parentElement.parentElement);
  });

  deleteButton.appendChild(i);

  newsd.appendChild(deleteButton);

  addBookToLibrary(newsd, bookshelf);
};

myLibrary.forEach((bookInfo) => createBookWindow(bookInfo));

function addBookToLibrary(newBook, bookshelf) {
  bookshelf.appendChild(newBook);
}

function removeBook(bookToRemove) {
  bookToRemove.remove();
}

const addBookButton = document.querySelector("#new-book");

let formShowing = false;

let showForm = () => {
  if (!formShowing) {
    let form = document.createElement("div");
    form.classList.add("form");
    container.appendChild(form);
    formShowing = true;
  }
};

addBookButton.addEventListener("click", showForm);
