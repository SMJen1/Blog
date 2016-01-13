(function(angular) {

  var myModule = angular.module("myModule", ['ngRoute']);

  myModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexController'
    }).otherwise({
      redirectTo: '/'
    });
  }]);

})(window.angular);