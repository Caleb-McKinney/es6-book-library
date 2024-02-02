// apiHandler.js
export async function fetchData() {
  try {
    const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript');
    const data = await response.json();
    return data.items.map(book => ({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author',
      description: book.volumeInfo.description || 'No description available',
      thumbnail: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
