define('main',["angular", "angularRoute"], function(angular) {

  var angular = require("angular");
  var myModule = angular.module("myModule", ['ngRoute']);

  myModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

  var indexController = function($scope) {
    $scope.name = "Mayank";
    $scope.age = 27;
  }

  myModule.controller('indexController', ['$scope', indexController]);

  angular.bootstrap(document, ['myModule']);

  return myModule;

});
