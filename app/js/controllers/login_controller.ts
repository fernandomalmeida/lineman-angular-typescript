/// <reference path="../_all.ts" />

module Login {
	'use strict';

	export class LoginController {
		credentials: any = { username: "", password: "" };

		static $inject = [
			'$location',
			'AuthenticationService'
		];

		constructor (
			private $location: ng.ILocationService,
			private AuthenticationService: Authentication.AuthenticationService
			){

			//this.$location = $location;
		}

		login() {
			this.AuthenticationService.login(this.credentials).success(angular.bind(this, this.onLoginSuccess));
		}

		onLoginSuccess() {
			this.$location.path('/home');
		}


	}

	angular.module("app").controller('LoginController', LoginController);
}
