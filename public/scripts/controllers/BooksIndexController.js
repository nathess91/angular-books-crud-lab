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
    })
  }

}
