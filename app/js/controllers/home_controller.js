/// <reference path="../_all.ts" />
var Home;
(function (Home) {
    'use strict';
    var HomeController = (function () {
        function HomeController($scope, $location, AuthenticationService) {
            this.$scope = $scope;
            this.$location = $location;
            this.AuthenticationService = AuthenticationService;
            this.title = "Home";
            this.message = "Mouse Over these images to see a directive at work";
            $scope.message = this.message;
        }
        HomeController.prototype.logout = function () {
            this.AuthenticationService.logout().success(angular.bind(this, this.onLogoutSuccess));
        };
        HomeController.prototype.onLogoutSuccess = function () {
            this.$location.path('/login');
        };
        HomeController.$inject = [
            '$scope',
            '$location',
            'AuthenticationService'
        ];
        return HomeController;
    })();
    Home.HomeController = HomeController;
    angular.module("app").controller('HomeController', HomeController);
})(Home || (Home = {}));
