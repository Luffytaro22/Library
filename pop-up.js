const buttonBook = document.querySelector('#add-book');
const formContainer = document.querySelector('#book-container');

/* All the elements in main that are not the form */
const blurElements = document.querySelectorAll('main > *:not(#book-container)');

/* Shows the form */
function showForm() {
  /* Add a blur effect to each element */
  blurElements.forEach((Element) => {
    Element.classList.add('blur-effect');
  });
  formContainer.style.display = 'flex';
}

/* Hides the form */
function hideForm(event) {
  if (!formContainer.contains(event.target)) {
    blurElements.forEach((Element) => {
      Element.classList.remove('blur-effect');
    });
    formContainer.style.display = 'none';
  }
}

/* A click listener to the add book button */
buttonBook.addEventListener('click', showForm);

/* check if the user taps or clicks outside the form */
document.addEventListener('mousedown', hideForm);
document.addEventListener('touchstart', hideForm);
