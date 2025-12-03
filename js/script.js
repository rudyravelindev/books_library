function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}
// Create first book
const book1 = new Book('Atomic Habits', 'James Clear', 300, true);

// Create second book
const book2 = new Book('Clean Code', 'Robert C. Martin', 450, false);

// Create third book
const book3 = new Book(
  'The Pragmatic Programmer',
  'Andy Hunt & Dave Thomas',
  320,
  true
);
console.log(book1);
console.log(book2);
console.log(book3);

// Step 2
const myLibrary = [];

function addBookToLibrary(title, author, pages, isRead) {
  // Step 1: create a Book
  const newBook = new Book(title, author, pages, isRead);

  // Step 2: push it into myLibrary
  myLibrary.push(newBook);
}
addBookToLibrary('Learn to Code', 'Rudy Ravelin', 500, true);
console.log(myLibrary);

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
      <p>Status: ${book.read ? 'Read ✔️' : 'Not read ❌'}</p>
      <button class="toggle-read" data-index="${i}">Toggle Read</button>
      <button class="remove-book" data-index="${i}">Remove</button>
    `;

    myLibraryDiv.appendChild(bookDiv);
  }

  addBookCardListeners();
}
function addBookCardListeners() {
  // Toggle Read
  const toggleButtons = document.querySelectorAll('.toggle-read');
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const index = btn.getAttribute('data-index');
      myLibrary[index].read = !myLibrary[index].read;
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
