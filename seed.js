var db = require('./models');

var bookList = [];

bookList.push({
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  releaseDate: '1925',
  image: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg'
});
bookList.push({
  title: 'The Sun Also Rises',
  author: 'Ernest Hemingway',
  releaseDate: '1926',
  image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501121968/the-sun-also-rises-9781501121968_hr.jpg'
});
bookList.push({
  title: 'Frankenstein',
  author: 'Mary Shelley',
  releaseDate: '1818',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51ZEZ69C9KL._SX301_BO1,204,203,200_.jpg'
});
bookList.push({
  title: 'The Day of the Locust',
  author: 'Nathanael West',
  releaseDate: '1939',
  image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/West_locust.jpg'
});
bookList.push({
  title: 'Dracula',
  author: 'Bram Stoker',
  releaseDate: '1897',
  image: 'https://wendyvancamp.files.wordpress.com/2014/10/dracula-book-cover.jpg'
});
bookList.push({
  title: 'American Psycho',
  author: 'Bret Easton Ellis',
  releaseDate: '1991',
  image: 'https://novelniche.files.wordpress.com/2011/11/american-psycho-book-cover.jpg'
});
bookList.push({
  title: 'Fight Club',
  author: 'Chuck Palahniuk',
  releaseDate: '1996',
  image: 'https://johnh90.files.wordpress.com/2008/10/fight-club.jpg'
});


db.Book.remove({}, function(err, books) {
  db.Book.create(bookList, function(err, books) {
    if (err) { return console.log('ERROR', err); }
    console.log('all books:', books);
    console.log('created', books.length, 'books');
    process.exit();
  });
});
