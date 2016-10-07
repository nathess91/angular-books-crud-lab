angular
  .module('fullyBooked')
  .controller('BooksShowController', BooksShowController);

  BooksShowController.$inject = ['$http', '$routeParams'];

  function BooksShowController ($http, $routeParams) {
    var vm = this;
    console.log($routeParams.id); // sanity check

    var bookId = $routeParams.id;

    $http({
      method: 'GET',
      url: '/api/books/' + bookId
    }).then(function successCallback(json) {
      vm.book = json.data;
    });
  }
