// Book constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

// Library array
const myLibrary = [];

// Add a new book to the library
function addBookToLibrary(title, author, pages, isRead) {
  const newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}

// Display books on the page
function displayBooks() {
  const myLibraryDiv = document.getElementById('myLibrary');
  myLibraryDiv.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book-card');

    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Status: ${book.isRead ? 'Read ✔️' : 'Not read ❌'}</p>
      <button class="toggle-read" data-index="${i}">Toggle Read</button>
      <button class="remove-book" data-index="${i}">Remove</button>
    `;

    myLibraryDiv.appendChild(bookDiv);
  }

  addBookCardListeners();
}

// Add event listeners to the book buttons
function addBookCardListeners() {
  // Toggle Read
  const toggleButtons = document.querySelectorAll('.toggle-read');
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      myLibrary[index].isRead = !myLibrary[index].isRead;
      displayBooks();
    });
  });

  // Remove book
  const removeButtons = document.querySelectorAll('.remove-book');
  removeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      myLibrary.splice(index, 1);
      displayBooks();
    });
  });
}

// Modal elements
const modal = document.getElementById('modal');
const openFormBtn = document.getElementById('openFormBtn');
const closeModal = document.getElementById('closeModal');

// Open modal
openFormBtn.onclick = () => {
  modal.style.display = 'block';
};

// Close modal
closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Close modal when clicking outside
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

// Handle form submission
document.getElementById('bookForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const isRead = document.getElementById('isRead').checked;

  addBookToLibrary(title, author, pages, isRead);
  displayBooks();

  modal.style.display = 'none'; // close form
  this.reset(); // clear form
});
