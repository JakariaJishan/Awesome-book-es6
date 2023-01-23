import { DateTime } from './modules/luxon.js';
import UiBooks from './modules/uibooks.js';

const bookMaker = new UiBooks();
bookMaker.displayBook();
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookMaker.addBookToLibrary(title, author, Date.now());
  bookMaker.displayBook();
});

// dom manipulation for spa

document.getElementById('list').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'block';
  document.getElementById('form').style.display = 'none';
  document.getElementById('contact-page').style.display = 'none';
});

document.getElementById('add-new').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('form').style.display = 'block';
  document.getElementById('contact-page').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', () => {
  document.getElementById('list-book').style.display = 'none';
  document.getElementById('form').style.display = 'none';
  document.getElementById('contact-page').style.display = 'block';
});

const date = DateTime.now();
const humanReadable = date.toLocaleString(DateTime.DATETIME_MED);

document.getElementById('time').innerHTML = humanReadable;