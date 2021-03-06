var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});



/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/books', controllers.books.index);
app.get('/api/books/:bookId', controllers.books.show);
app.post('/api/books', controllers.books.create);
app.delete('/api/books/:bookId', controllers.books.destroy);
app.put('/api/books/:bookId', controllers.books.update);


// ALL OTHER ROUTES (ANGULAR HANDLES)
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
