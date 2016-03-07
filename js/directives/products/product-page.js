(function(){
	angular.module('StoreApplication').directive('productShowPage', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/products/product-show-page.html',
			controller: 'ProductsShowController'
		};
	});
})();