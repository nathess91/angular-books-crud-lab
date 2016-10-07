var db = require('./models');

var bookList = [];

bookList.push({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  releaseDate: '1925'
});
bookList.push({
  title: 'The Sun Also Rises',
  author: 'Ernest Hemingway',
  releaseDate: '1926'
});
bookList.push({
  title: 'Frankenstein',
  author: 'Mary Shelley',
  releaseDate: '1818'
});
bookList.push({
  title: 'The Day of the Locust',
  author: 'Nathanael West',
  releaseDate: '1939'
});
bookList.push({
  title: 'Dracula',
  author: 'Bram Stoker',
  releaseDate: '1897'
});
bookList.push({
  title: 'American Psycho',
  author: 'Bret Easton Ellis',
  releaseDate: '1991'
});
bookList.push({
  title: 'Fight Club',
  author: 'Chuck Palahniuk',
  releaseDate: '1996'
});


db.Book.remove({}, function(err, books) {
  db.Book.create(bookList, function(err, books) {
    if (err) { return console.log('ERROR', err); }
    console.log('all books:', books);
    console.log('created', books.length, 'books');
    process.exit();
  });
});
