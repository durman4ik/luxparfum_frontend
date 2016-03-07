(function(){
	angular.module('StoreApplication').directive('lastProductIsLoaded', function($timeout, $rootScope){
		var slider = null;
		return {
			restrict: 'A',
			link: function(scope, element, attributes){
				if(scope.$last) {					
					$timeout(function () {
						var second_header = $('#second-header');
						var section1_pagi = $('#section1 .bx-pager.bx-default-pager');
						var isInit = false;
						var secondHeaderTopOffset = second_header.offset().top;
						var secondSlideTopOffset = $('#second').offset().top;
						var secondHeaderTopPos;
						var needResize = false;
						var isThirdSlide = false;
						
						document.addEventListener('scroll', function(){
							if (window.scrollY > 100) {
								second_header.css('top', 0).addClass('top-animated');
							} else {
								second_header.css('top', 111).removeClass('top-animated');
							}
						});						

						jQuery('#fullpage').fullpage({
							navigation: true,
							loopHorizontal: false,
							controlArrows: false,
							lockAnchors: true,
							scrollBar: true,
							normalScrollElements: '.a-p-wrapper, .a-b-right-container, .search-output',
						});
						
						$.fn.fullpage.setKeyboardScrolling(false, 'left, right');
						$.fn.fullpage.setAllowScrolling(false, 'left, right');
						
						window.loadingScreen.finish();
						
						$rootScope.checkStartProduct();
					});
				}
			}
		}
	})
})();