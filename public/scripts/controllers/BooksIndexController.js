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

  $http({
    method: 'GET',
    url: '/api/books'
  }).then(function successCallback(response) {
    vm.books = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });
}
