(function(){
	angular.module('StoreApplication').directive('popularProducts', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/home/popular-products.html',
			controller: 'ProductsIndexController'
		};
	});
})();