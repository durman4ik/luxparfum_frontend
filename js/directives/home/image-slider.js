(function(){
	angular.module('StoreApplication').directive('homeSlider', function($rootScope, Banners){
		return {
			restrict: 'E',
			templateUrl: "templates/home/image-slider.html",
			controller:function(){
				this.banners = Banners.three();
			},
			controllerAs: 'slider'
		}
	});	
})();
