var db = require('../models');

// GET ALL BOOKS
function index(req, res) {
  db.Book.find({}, function(err, allBooks) {
    res.json(allBooks);
  });
}

// CREATE A NEW BOOK
function create(req, res) {
  console.log('body', req.body);

  db.Book.create(req.body, function(err, book) {
    if (err) { console.log('error', err); }
    console.log(book);
    res.json(book);
  });
}

// SHOW ONE BOOK
function show(req, res) {
  db.Book.findById(req.params.bookId, function(err, foundBook) {
    if(err) { console.log('booksController.show error', err); }
    console.log('booksController.show responding with', foundBook);
    res.json(foundBook);
  });
}

// DELETE A BOOK
function destroy(req, res) {
  db.Book.findOneAndRemove({ _id: req.params.bookId }, function(err, foundBook){
    res.json(foundBook);
  });
}

// UPDATE A BOOK
function update(req, res) {
  console.log('updating with data', req.body);
  db.Book.findById(req.params.bookId, function(err, foundBook) {
    if(err) { console.log('booksController.update error', err); }
    foundBook.author = req.body.author;
    foundBook.title = req.body.title;
    foundBook.releaseDate = req.body.releaseDate;
    foundBook.save(function(err, savedBook) {
      if(err) { console.log('saving altered book failed'); }
      res.json(savedBook);
    });
  });

}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
