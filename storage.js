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

  if (localStorage.getItem('library')) {
    /* Reasign the library array to the localStorage library */
    myLibrary = JSON.parse(localStorage.getItem('library'));
    
    /* Adds the new book */
    myLibrary.push(book);
    localStorage.setItem('library', JSON.stringify(myLibrary));
  } else {
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }

  /* Prevents the form to be submitted */
  event.preventDefault();
}

/* Function that displays the books added */
function displayBooks() {
  /* Create element */
  const div = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const pPages = document.createElement('p');
  const pRead = document.createElement('p');
  const pRemove = document.createElement('p');

  /* Add classes */
  div.classList.add('books');

  /* Append elements */
  div.appendChild(pTitle);
  div.appendChild(pAuthor);
  div.appendChild(pPages);
  div.appendChild(pRead);
  div.appendChild(pRemove);
}

/* A click listener to the submit button */
submitButton.addEventListener('click', addBook);
