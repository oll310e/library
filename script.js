//Structures

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  static createBook() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    return new Book(title, author, pages, read);
  }

  static addBook(book) {
    let bookElement = document.createElement("div");
    bookElement.classList.add("book");

    let readText = "read";
    let readClass = "read";

    if (!book.read) {
      readText = "not read";
      readClass = "not-read";
    }

    bookElement.innerHTML = `
      <p>${book.title}</p>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p class="read-btn ${readClass}">${readText}</p>
      <button class="delete">X</button>
    `;

    let library = document.querySelector(".library");

    library.appendChild(bookElement);

    Library.clearForm();
  }

  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
  }

  static deleteBook(event) {
    event.target.parentElement.remove();
  }

  static toggleRead(e) {
    if (e.target.classList.contains("read")) {
      e.target.classList.remove("read");
      e.target.classList.add("not-read");
      e.target.innerText = "not read";
    } else {
      e.target.classList.remove("not-read");
      e.target.classList.add("read");
      e.target.innerText = "read";
    }
  }
}

//Events

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newBook = Library.createBook();
  Library.addBook(newBook);
});

let library = document.querySelector(".library");
library.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    Library.deleteBook(e);
  }

  if (e.target.classList.contains("read-btn")) {
    Library.toggleRead(e);
  }
});
