const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const submitButton = document.querySelector('#submit-button');
const booksContainer = document.querySelector('#books');

let myLibrary = [];

if (localStorage.getItem('library')) {
  /* Reasign the library array to the localStorage library */
  myLibrary = JSON.parse(localStorage.getItem('library'));
}

/* Constructor function */
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

/* Function fot the books divs */
function generateBooks(book) {
  /* Create element */
  const div = document.createElement('div');
  const pTitle = document.createElement('p');
  const pAuthor = document.createElement('p');
  const pPages = document.createElement('p');
  const pRead = document.createElement('p');
  const pRemove = document.createElement('button');

  /* Add classes */
  div.classList.add('books');
  pRemove.name = book.title;

  /* Add the text */
  pTitle.textContent = book.title;
  pAuthor.textContent = book.author;
  pPages.textContent = book.pages;
  pRemove.textContent = 'REMOVE';
  
  if (book.read == 'on') {
    pRead.textContent = 'Readed';
  } else {
    pRead.textContent = 'Not readed';
  }

  /* Append elements */
  div.appendChild(pTitle);
  div.appendChild(pAuthor);
  div.appendChild(pPages);
  div.appendChild(pRead);
  div.appendChild(pRemove);
  booksContainer.appendChild(div);

  pRemove.addEventListener('click', () => {
    if (pRemove.name === book.title) {
      div.remove();
    }
  });
}

/* Function that adds books to the array */
function addBook(event) {
  let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);

  if (localStorage.getItem('library')) {
    /* Adds the new book */
    myLibrary.push(book);
    localStorage.setItem('library', JSON.stringify(myLibrary));
  } else {
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }

  /* Prevents the form to be submitted */
  event.preventDefault();
  displayBook(book);
}

/* function that displays only the new books added */
function displayBook(book) {
  generateBooks(book);
}

/* Function that displays the books added */
function displayBooks() {
  /* Loop throught the array */
  myLibrary.forEach((book) => {
    generateBooks(book);
  });
}
displayBooks();

/* A click listener to the submit button */
submitButton.addEventListener('click', addBook);
