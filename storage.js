const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookRead = document.querySelector('#read');
const submitButton = document.querySelector('#submit-button');
const booksContainer = document.querySelector('#books');
const form = document.querySelector('#book-container');

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
  const pRead = document.createElement('button');
  const pRemove = document.createElement('button');

  /* Add classes */
  div.classList.add('books');
  pRemove.classList.add('remove-buttons');
  pRemove.name = book.title;
  const tit = book.title;
  const aut = book.author;
  pRemove.tabIndex = myLibrary.findIndex((obj) => obj.title === tit && obj.author === aut);

  /* Add the text */
  pTitle.textContent = book.title;
  pAuthor.textContent = book.author;
  pPages.textContent = book.pages;
  pRemove.textContent = 'Remove';

  if (book.read === 'on') {
    pRead.textContent = 'Readed';
    pRead.classList.add('readed');
  } else {
    pRead.textContent = 'Not readed';
    pRead.classList.add('not-readed');
  }

  /* Append elements */
  div.appendChild(pTitle);
  div.appendChild(pAuthor);
  div.appendChild(pPages);
  div.appendChild(pRead);
  div.appendChild(pRemove);
  booksContainer.appendChild(div);

  /* A listener to the Remove button */
  pRemove.addEventListener('click', () => {
    const index = pRemove.tabIndex;
    div.remove();

    /* Split the array and join both parts */
    myLibrary = [...myLibrary.slice(0, index), ...myLibrary.slice(index + 1)];
    localStorage.setItem('library', JSON.stringify(myLibrary));
    displayBooks();
  });

  /* A listener to the Read button */
  pRead.addEventListener('click', () => {
    if (book.read === 'on') {
      book.read = 'off';
      pRead.textContent = 'Not Readed';
      pRead.classList.remove('readed');
      pRead.classList.add('not-readed');
      localStorage.setItem('library', JSON.stringify(myLibrary));
    } else {
      book.read = 'on';
      pRead.textContent = 'Readed';
      pRead.classList.remove('not-readed');
      pRead.classList.add('readed');
      localStorage.setItem('library', JSON.stringify(myLibrary));
    }
  });
}

/* function that displays only the new books added */
function displayBook(book) {
  generateBooks(book);
}

/* Function that displays the books added */
function displayBooks() {
  booksContainer.innerHTML = '';
  /* Loop throught the array */
  myLibrary.forEach((book) => {
    generateBooks(book);
  });
}
displayBooks();

/* Function that adds books to the array */
function addBook(event) {
  const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);

  const vali1 = bookTitle.validity.valueMissing;
  const vali2 = bookAuthor.validity.valueMissing;
  const vali3 = bookPages.validity.valueMising;

  if (!vali1 && !vali2 && !vali3) {
    /* Prevents the form to be submitted */
    event.preventDefault();
  } else {
    return;
  }

  if (localStorage.getItem('library')) {
    /* Adds the new book */
    myLibrary.push(book);
    localStorage.setItem('library', JSON.stringify(myLibrary));
  } else {
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }

  form.reset();
  displayBook(book);
}

/* A click listener to the submit button */
submitButton.addEventListener('click', addBook);

/* A click listener to the read button */
bookRead.addEventListener('click', () => {
  if (bookRead.checked) {
    bookRead.value = 'on';
  } else {
    bookRead.value = 'off';
  }
});
