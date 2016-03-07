(function(){
	angular.module('StoreApplication').directive('productImagesSliderLoaded', function($timeout){
		var slider = null;
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				if(scope.$last){
					$timeout(function(){
						if(slider){
							slider.reloadSlider();
						} else {
							slider = jQuery('.s-pP-images div.slider').bxSlider({
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