/// <reference path="../_all.ts" />

module Home {
	'use strict';

	export class HomeController {
		public title: string = "Home";
		public message: string = "Mouse Over these images to see a directive at work";

		static $inject = [
			'$scope',
			'$location',
			'AuthenticationService'
		];
		constructor(
			private $scope: ShowsMessageWhenHovered.IParentScope,
			private $location: ng.ILocationService,
			private AuthenticationService: Authentication.AuthenticationService
			) {
			$scope.message = this.message;
		}

		logout() {
			this.AuthenticationService.logout().success(angular.bind(this, this.onLogoutSuccess));
		}

		onLogoutSuccess() {
			this.$location.path('/login');
		}
	}

	angular.module("app").controller('HomeController', HomeController);
}

/*
angular.module("app").controller('HomeController', function($scope, $location, AuthenticationService) {
  $scope.title = "Home";
  $scope.message = "Mouse Over these images to see a directive at work";

  var onLogoutSuccess = function(response) {
    $location.path('/login');
  };

  $scope.logout = function() {
    AuthenticationService.logout().success(onLogoutSuccess);
  };
});
*/
