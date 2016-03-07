(function(){
	angular.module('StoreApplication').factory('Products', function ProductsFactory($http, $rootScope){
		var url = 'http://lvh.me:3000/api/v1/products';
		var headers = {Authorization: 'Basic YWRtaW46YWRtaW4='};
		return {
			all: function(){
//				return $http({method: 'GET', url: $rootScope.apiUrl + '/products', headers: headers, cache: true });
//				return $http({method: 'GET', url: url, headers: headers, cache: true });
				return $http({method: 'GET', url: 'http://luxparfum.by/db/products.json', headers: headers, cache: true });
				
			}
		};
	});
})();