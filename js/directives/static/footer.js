(function(){
	angular.module('StoreApplication').directive('siteFooter', function(){
		return {
			restrict: 'E',
			templateUrl: "templates/static/site-footer.html",
			controller: 'HomeIndexController',
			controllerAs: 'footer'
		};
	});
})();