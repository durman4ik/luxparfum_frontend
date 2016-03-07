(function(){
	angular.module('StoreApplication').filter('getById', function(){
		return function(input, id){
			for(var i = 0; i < input.length; i++) {
				if(input[i]._id.$oid == id) {
					return input[i];
				}
			}
			return null;
		}
	});
})();