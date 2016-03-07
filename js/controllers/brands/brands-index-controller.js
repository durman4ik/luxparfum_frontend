(function(){
	angular.module('StoreApplication').controller('BrandsIndexController', function($rootScope, $scope, Brands){		
		
		Brands.all().success(function(data){
			$rootScope.allBrands = data;
		});
				
		$scope.offset = 0;
		$scope.orderTemplate;
		$scope.isInit = false;
		$scope.isActiveBrand = function(brand){
			if (typeof brand !=  'undefined') {
				return $rootScope.currentBrand == brand;
			} else {
				return false;
			}
		}
		
		$scope.setOffset = function(row){			
			$scope.offset = row == 0 ? 0 : row * 4;
		}
	});
})();