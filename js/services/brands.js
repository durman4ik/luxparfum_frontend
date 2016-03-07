(function(){
	angular.module('StoreApplication').factory('Brands', function BrandsFactory($rootScope, $http){
		var headers = {Authorization: 'Basic YWRtaW46YWRtaW4='};
		return {
			all: function(){
//				return $http({method: 'GET', headers: headers, url: $rootScope.apiUrl + '/brands', cache: true });
				return $http({method: 'GET', headers: headers, url: 'http://luxparfum.by/db/brands.json', cache: true });	
			}
		};
	});
})();