(function(){
	angular.module('StoreApplication').directive('selectCategoryOfBrands', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/brands/select-category-of-brands.html',
			controller: 'BrandsIndexController',
			controllerAs: 'brandsCtrl'			
		}
	});
})();