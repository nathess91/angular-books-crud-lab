var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
  releaseDate: String,
  image: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
