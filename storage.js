const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const submitButton = document.querySelector('#submit-button');

let myLibrary = [];

/* Constructor function */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* Function that adds books to the array */
function addBook(event) {
  let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
  myLibrary.push(book);
  localStorage.setItem('library', JSON.stringify(myLibrary));
  event.preventDefault();
}

/* A click listener to the submit button */
submitButton.addEventListener('click', addBook);
