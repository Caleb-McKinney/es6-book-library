// main.js
import { fetchData } from './scripts/apiHandler.js';
import { renderBooks } from './scripts/bookUI.js';

async function init() {
  try {
    const booksData = await fetchData();
    renderBooks(booksData, '#books-container');
  } catch (error) {
    console.error('Initialization error:', error);
  }
}

document.addEventListener('DOMContentLoaded', init);
