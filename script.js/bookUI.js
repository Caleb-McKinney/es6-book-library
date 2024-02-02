// bookUI.js
export function createBookElement(book) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');

  bookElement.innerHTML = `
    <img src="${book.thumbnail}" alt="${book.title}" />
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Description: ${book.description}</p>
  `;

  return bookElement;
}

export function renderBooks(books, container) {
  const bookContainer = document.querySelector(container);

  books.forEach(book => {
    const bookElement = createBookElement(book);
    bookContainer.appendChild(bookElement);
  });
}
