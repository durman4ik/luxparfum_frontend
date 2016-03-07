(function(){
	angular.module('StoreApplication').controller('ProductsIndexController', function($filter, $scope, $rootScope, Products){
		Products.all().success(function(data){
			$rootScope.allProducts = data;
			$rootScope.products = $rootScope.getRandomProducts();
			$rootScope.popularProducts = $filter('filter')($rootScope.allProducts, {categories: {name: 'Популярные'}});
			$rootScope.checkStartProduct();
		});
		
		$scope.setOffsetPp = function(slide, row){
			var additional = row == 0 ? 0 : 5;
			$scope.offsetPp = slide == 0 ?  slide * 5 + additional : slide * 5 + 5 + additional;
		}
		
	});
})();