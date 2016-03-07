(function(){
	angular.module('StoreApplication').directive('brandsPage', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/brands/brand-page.html',
			controller: 'BrandsIndexController',
			controllerAs: 'brandsCtrl'
		};
	});
})();