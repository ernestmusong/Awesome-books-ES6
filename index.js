import Book from './modules/bookClass.js';
import Storage from './modules/storage.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

/* eslint no-unused-vars: 0 */
const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const newContact = document.getElementById('contact');

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#form').addEventListener('submit', () => {
  const title = document.querySelector('#book').value;
  const author = document.querySelector('#author').value;
  const id = Math.floor(Math.random() * 10000);
  const book = new Book(title, author, id);
  UI.addBookToList(book);
  Storage.addBook(book);
  UI.clearFields();
});

document.querySelector('#container').addEventListener('click', (e) => {
  UI.deleteBook(e.target, e.target.id);
  Storage.removeBook(
    e.target.previousElementSibling.previousElementSibling.textContent,
  );
});

list.addEventListener('click', () => {
  booksSection.classList.remove('display');
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
});

addNew.addEventListener('click', () => {
  newBookSection.classList.remove('display');
  booksSection.classList.add('display');
  contactSection.classList.add('display');
});

newContact.addEventListener('click', () => {
  contactSection.classList.remove('display');
  newBookSection.classList.add('display');
  booksSection.classList.add('display');
});

const time = document.querySelector('#date');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);