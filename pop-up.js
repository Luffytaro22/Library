const buttonBook = document.querySelector('#add-book');
const formContainer = document.querySelector('#book-container');

/* Shows the form */
function showForm() {
  formContainer.style.display = 'flex';
}

/* Hides the form */
function hideForm(event) {
  if (!formContainer.contains(event.target)) {
    formContainer.style.display = 'none';
  }
}

/* A click listener to the add book button */
buttonBook.addEventListener('click', showForm);

/* check if the user taps or clicks outside the form */
document.addEventListener('mousedown', hideForm);
document.addEventListener('touchstart', hideForm);
