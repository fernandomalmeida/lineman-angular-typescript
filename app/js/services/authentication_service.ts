/// <reference path="../_all.ts" />


module Authentication {

	export class AuthenticationService {

		static $inject = [
			'$http'
		];

		constructor(
			private $http:ng.IHttpService
			) {}

		login(credentials): any {
			return this.$http.post('/login', credentials);
		}
		logout(): any {
			return this.$http.post('/logout', {});
		}
	}

	angular.module("app").service('AuthenticationService', AuthenticationService);
}
