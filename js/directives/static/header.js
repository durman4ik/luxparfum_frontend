(function(){
	angular.module('StoreApplication').directive('siteHeader', function(){		
		return {
			restrict: 'E',
			templateUrl: "templates/static/site-header.html",
			controller: 'HomeIndexController',
			controllerAs: 'header'
		};
	});	
})();
