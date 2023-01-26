const bookshelf = document.querySelector(".bookshelf");
const container = document.querySelector(".container");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.place = myLibrary.length;
  this.info = function () {
    return `${this.title} by ${this.author}, ${pages} pages, ${
      read ? "already read" : "not read yet"
    }`;
  };
}

let createBookWindow = (bookInfo) => {
  console.log(bookInfo, "bookinfo");
  let newsd = document.createElement("div");
  newsd.classList.add("book", bookInfo.place);
  //newsd.setAttribute('data', `${}`)
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
  read.innerText = "Read";
  read.classList.add("read", "button-read");
  if (bookInfo.read == "not-read") {
    read.innerText = "Not Read";
    read.classList.remove("read");
    read.classList.add("not-read");
  }

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

function addBookToLibrary(newBook, bookshelf) {
  bookshelf.appendChild(newBook);
}

function removeBook(bookToRemove) {
  index = bookToRemove.classList[1];
  myLibrary.splice(index, 1);
  bookToRemove.remove();
}

function removeForm(form) {
  form.remove();
}

function createBook(title, author, pages, read) {
  let newBookToLibrary = new Book(title, author, pages, read);
  return newBookToLibrary;
}

const addBookButton = document.querySelector("#new-book");

let formShowing = false;

let showForm = () => {
  if (!formShowing) {
    let form = document.createElement("form");
    form.id = "form";
    form.classList.add("form");

    container.appendChild(form);
    formShowing = true;

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-x", "deleteButton");
    icon.addEventListener("click", (e) => {
      removeForm(e.target.parentElement);
      formShowing = false;
    });
    form.appendChild(icon);

    function createInput(name, type) {
      let label = document.createElement("label");
      label.setAttribute("for", `form-${name}`);
      label.setAttribute("id", `form-${name}-label`);
      label.innerText = `${name}`;

      let input = document.createElement("input");
      input.classList.add("input");
      input.setAttribute("id", `form-${name}`);
      input.type = type;
      input.name = name;
      input.required = true;

      return [label, input];
    }

    for (let i = 0; i < 3; i++) {
      let input;
      let type = "text";
      switch (i) {
        case 0:
          input = "title";
          break;
        case 1:
          input = "author";
          break;
        case 2:
          input = "pages";
          type = "number";
          break;
      }
      let newInput = createInput(input, type);
      newInput.forEach((elem) => {
        form.appendChild(elem);
      });
    }

    let label = document.createElement("label");
    label.setAttribute("for", `form-read`);
    label.innerText = `read`;

    let readButton = document.createElement("input");
    readButton.classList.add("read-button");
    readButton.setAttribute("id", `form-read`);
    readButton.setAttribute("type", "checkbox");
    readButton.setAttribute("name", "read");
    readButton.setAttribute("value", "read");

    let submitLabel = document.createElement("label");
    submitLabel.setAttribute("for", `form-submit`);
    submitLabel.innerText = ``;

    let submitButton = document.createElement("input");
    submitButton.classList.add("submit-button");
    submitButton.setAttribute("id", `form-submit`);
    submitButton.setAttribute("type", "submit");
    submitButton.value = "register";

    [label, readButton, submitLabel, submitButton].forEach((elem) => {
      form.appendChild(elem);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      console.log("submitted");

      let title = document.querySelector("#form-title").value;
      let author = document.querySelector("#form-author").value;
      let pages = document.querySelector("#form-pages").value;
      let readButton = document.querySelector("#form-read");
      let read = "not-read";
      if (readButton.checked) {
        read = "read";
      }

      let newlyCreatedBook = createBook(title, author, pages, read);
      console.log(newlyCreatedBook);

      myLibrary.push(newlyCreatedBook);
      console.log(myLibrary);

      createBookWindow(newlyCreatedBook);

      removeForm(form);
      formShowing = false;
    });
  }
};

addBookButton.addEventListener("click", showForm);
