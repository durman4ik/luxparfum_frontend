(function(){
	angular.module('StoreApplication').controller('ProductsShowController', function($rootScope, $scope, $http, $timeout){
		$scope.isMessageBoxShowed = false;
		
		$scope.showModal = function(val){
			$scope.isModalShowed = val;
		}
		
		$scope.showMessageBox = function(bool) {
			if (bool){
				$scope.isMessageBoxShowed = true;
			} else {
				$scope.isMessageBoxShowed = false;
			}
		}
		
		$scope.createOrder = function(order){
			var spinner = window.pleaseWait({
				logo: '/img/lyux_small.png',
				backgroundColor: 'rgba(0, 0, 0, 0.6)',
				loadingHtml: '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
			});
			
			order.product_name = $rootScope.currentProduct.name_en;
			order.price = $rootScope.currentProduct.volumes[0].price * order.count;
			order = {order: order};
			
			
			$http({method: 'POST', url: $rootScope.apiUrl + '/orders.json', data: order})
				.success(function(data){
					$scope.showModal(false);
					$scope.showMessageBox(true);
					$scope.isSucceed = true;
					spinner.finish();
				})
				.error(function(){
					$scope.showMessageBox(true);
					$scope.showModal(false);
					$scope.isSucceed = false;
					spinner.finish();
				});
		}
		
		
		$scope.$watch('isMessageBoxShowed', function(){
			if($scope.isMessageBoxShowed){
				$timeout(function () {
					$scope.isMessageBoxShowed = false;
				}, 1500);
			}
		});
		

	});
})();