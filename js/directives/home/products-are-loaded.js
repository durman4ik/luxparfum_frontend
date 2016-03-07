(function(){
	angular.module('StoreApplication').directive('productsAreLoaded', function($timeout){
		var slider = null;
		return {
			restrict: 'A',
			link: function(scope, element, attributes){
				if(scope.$last) {
					$timeout(function(){
						if(slider){
							slider.reloadSlider();
						} else {
							slider = jQuery('#p-p-slider').bxSlider({
								controls: false,
								auto: false
							});
							
						}
					});
					
				}
			}
		};
	});
})();