// apiHandler.js

export async function fetchBooks() {
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await response.json();
    const books = extractBookDetails(data);
    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}

function extractBookDetails(data) {
  return data.items.map(item => {
    const book = {
      id: item.id,
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      publisher: item.volumeInfo.publisher,
      publishedDate: item.volumeInfo.publishedDate,
      description: item.volumeInfo.description,
      thumbnail: item.volumeInfo.imageLinks?.thumbnail || 'No thumbnail available',
      pageCount: item.volumeInfo.pageCount,
      previewLink: item.volumeInfo.previewLink,
    };
    return book;
  });
}
