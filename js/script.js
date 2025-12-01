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
