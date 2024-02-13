// main.js

import { fetchBooks } from './apiHandler.js';
import { renderBooks } from './bookUI.js';

// Function to initialize the application
async function initializeApp() {
  try {
    // Fetch book data
    const books = await fetchBooks();
    
    // Render books on the webpage
    renderBooks(books);
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

// Call initializeApp when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
