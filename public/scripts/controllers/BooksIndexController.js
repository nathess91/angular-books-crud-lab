angular
  .module('fullyBooked')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController($http) {
  var vm = this;
  vm.newBook = {};
  vm.newBook = {
    title: '',
    author: '',
    releaseDate: ''
  };

  // GET ALL BOOKS
  $http({
    method: 'GET',
    url: '/api/books'
  }).then(function successCallback(response) {
    vm.books = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  // CREATE A BOOK
  vm.createBook = function() {
    $http({
      method: 'POST',
      url: '/api/books',
      data: vm.newBook,
    }).then(function successCallback(response) {
      vm.books.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  // EDIT A BOOK
  vm.editBook = function(book) {
    $http({
      method: 'PUT',
      url: '/api/books/' + book._id,
      data: book
    }).then(function successCallback(json) {

    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  // DELETE A BOOK
  vm.deleteBook = function(book) {
    $http({
      method: 'DELETE',
      url: '/api/books/' + album._id
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      vm.books.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }
  
}
