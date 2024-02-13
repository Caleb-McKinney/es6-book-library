// bookUI.js

export function createBookElement(book) {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');

  const thumbnailElement = document.createElement('img');
  thumbnailElement.src = book.thumbnail;
  thumbnailElement.alt = book.title;
  bookElement.appendChild(thumbnailElement);

  const titleElement = document.createElement('h2');
  titleElement.textContent = book.title;
  bookElement.appendChild(titleElement);

  const authorsElement = document.createElement('p');
  authorsElement.textContent = `Authors: ${book.authors.join(', ')}`;
  bookElement.appendChild(authorsElement);

  const publisherElement = document.createElement('p');
  publisherElement.textContent = `Publisher: ${book.publisher}`;
  bookElement.appendChild(publisherElement);

  const publishedDateElement = document.createElement('p');
  publishedDateElement.textContent = `Published Date: ${book.publishedDate}`;
  bookElement.appendChild(publishedDateElement);

  const pageCountElement = document.createElement('p');
  pageCountElement.textContent = `Page Count: ${book.pageCount}`;
  bookElement.appendChild(pageCountElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = book.description || 'No description available';
  bookElement.appendChild(descriptionElement);

  const previewLinkElement = document.createElement('a');
  previewLinkElement.textContent = 'Preview';
  previewLinkElement.href = book.previewLink;
  previewLinkElement.target = '_blank';
  bookElement.appendChild(previewLinkElement);

  return bookElement;
}

export function renderBooks(books) {
  const container = document.getElementById('book-container');
  container.innerHTML = ''; // Clear previous content

  books.forEach(book => {
    const bookElement = createBookElement(book);
    container.appendChild(bookElement);
  });
}
