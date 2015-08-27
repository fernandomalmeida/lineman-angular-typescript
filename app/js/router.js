//angular.module("app").config(function($routeProvider, $locationProvider) {
angular.module("app").config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
	function($locationProvider, $stateProvider, $urlRouterProvider) {

	$locationProvider.html5Mode({enabled: true, requireBase: false});
  
	$stateProvider
		.state('login', {
			url: '/login',
			controller: 'LoginController',
			templateUrl: 'login.html',
			controllerAs: 'vm'
		})
		.state('home', {
			url: '/home',
			controller: 'HomeController',
			templateUrl: 'home.html',
			controllerAs: 'vm'
		})
		.state('default', {
			url: '/',
			template: 'Ui-Router WORKING \\o/',
			controller: ['$state', function($state){
				$state.go('login');
			}]
		})
		.state('books-resource', {
			url: '/$resource/list-of-books',
			controller: 'BooksResourceController',
			templateUrl: 'books_resource.html',
			controllerAs: 'vm'
		})
		.state('books-http', {
			url: '/$http/list-of-books',
			controller: 'BooksHttpController',
			templateUrl: 'books_http.html',
			controllerAs: 'vm',
			resolve: {
				books: function(BookService) {
					return BookService.getBooks();
				}
			}
		})
		;
	/*
	$routeProvider.when('/$resource/list-of-books', {
	templateUrl: 'books_resource.html',
	controller: 'BooksResourceController',
	controllerAs: 'vm'
	});

	$routeProvider.when('/$http/list-of-books', {
	templateUrl: 'books_http.html',
	controller: 'BooksHttpController',
	controllerAs: 'vm',
	resolve: {
		books: function(BookService) {
			return BookService.getBooks();
		}
	}
	});

	$routeProvider.otherwise({ redirectTo: '/login' });
	*/

}]);
