/// <reference path="_all.ts" />
//myApp = 
angular.module("app", ["ngResource", "ngRoute", "ui.router"]).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
})
//.factory('AuthenticationService', ['$http', Authentication.Service])
//.controller('LoginController', ['$scope', '$location', 'AuthenticationService', Login.Controller])
//.controller('LoginController', ['$scope', '$location', 'AuthenticationService', Login.Controller])
//.controller('LoginController', ['$scope', '$location', '$http', ($scope, $location, $http) => new Login.Controller($scope, $location, $http)])
;
