var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/angular-books-crud-lab");

var Book = require('./book');

module.exports.Book = Book;
