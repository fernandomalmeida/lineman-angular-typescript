/// <reference path="../_all.ts" />

module ShowsMessageWhenHovered {
	export interface IShowsMessageWhenHoveredAttributes {
	    message: string
	}

	export interface IParentScope extends ng.IScope{
		message: string
	}

	export class ShowsMessageWhenHoveredDirective implements ng.IDirective {
		static $inject = [];
		static instance(): ng.IDirective {
			return new ShowsMessageWhenHoveredDirective();
		}

		restrict = 'A';
		//require = '';
		link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: IShowsMessageWhenHoveredAttributes) => void;

		constructor (){
			this.link = this._link.bind(this);
		}

		_link(scope: IParentScope, element: ng.IAugmentedJQuery, attrs: IShowsMessageWhenHoveredAttributes) {
			var _this = this;
			var originalMessage = scope.message;
			element.bind("mouseenter", () => {
				scope.message = attrs.message;
				scope.$apply();
				});
			element.bind("mouseleave", () => {
				scope.message = originalMessage;
				scope.$apply();
				});
		}
	}

	angular.module("app").directive("showsMessageWhenHovered", ShowsMessageWhenHoveredDirective.instance);
}
//showsMessageWhenHovered

/*
angular.module("app").directive("showsMessageWhenHovered", function() {
  return function(scope, element, attributes) {
    var originalMessage = scope.message;
    element.bind("mouseenter", function() {
      scope.message = attributes.message;
      scope.$apply();
    });
    element.bind("mouseleave", function() {
      scope.message = originalMessage;
      scope.$apply();
    });
  };
});
*/
