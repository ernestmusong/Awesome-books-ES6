import Storage from './storage.js';

export default class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#container');
    const addedbook = document.createElement('li');
    addedbook.setAttribute('class', 'container-list');
    addedbook.innerHTML = `
    <div class="description">
    <h2>${book.title}</h2>
    by
    <h3>${book.author}</h3>
    </div>
    <button type='submit' class='remove'>Remove</button>
       `;
    list.appendChild(addedbook);
  }

  static deleteBook(elem) {
    if (elem.classList.contains('remove')) {
      elem.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#book').value = '';
    document.querySelector('#author').value = '';
  }
}
