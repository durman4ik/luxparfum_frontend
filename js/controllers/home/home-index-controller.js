(function(){
	angular.module('StoreApplication').controller('HomeIndexController', function($rootScope, $scope, $location, $filter){
		var store = this;		
		var categoryProducts;
		
		$rootScope.serverUrl = 'http://lvh.me:3000';
		$rootScope.apiUrl = 'http://ec2-52-28-172-168.eu-central-1.compute.amazonaws.com/api/v1';

		$rootScope.startProduct = null;
		store.showBrands = false;
		store.siteName = 'luxparfum.by';
		store.siteUrl  = 'http://luxparfum.by';
		$scope.showSearch = false;
		$rootScope.currentProduct;
		$rootScope.currentCategory = null;
		$rootScope.currentBrand = null;
		$rootScope.order = new Object();
		$rootScope.order.count = 1;
		$rootScope.isInit;
		$rootScope.isModalShowed = false;
		$rootScope.siteTitle = 'Luxparfum.by - Парфюмерия и духи. Скидки от 50%. Доставка!';
		var category;
		
		$scope.random = function(){
			return 0.5 - Math.random();
		};
		
		$rootScope.setCurrentBrand = function(brand){
			$rootScope.currentBrand = brand;			
			setProducts();
			$rootScope.setUrl('brand');
		}
		
		$rootScope.setCurrentProduct = function(product) {
			$rootScope.currentProduct = product;

			if(typeof product != 'undefined' && product != null) {
				$rootScope.order.volume = product.volumes[0];
				$rootScope.setUrl('page');
			}
			
			$rootScope.$apply;
		}
		
		$rootScope.setCurrentCategory = function(c) {
			category = c == "men" ? 'Мужские' : 'Женские'
			$rootScope.currentCategory = c;
			categoryProducts = $filter('filter')($rootScope.allProducts, {categories: {name: category}});	
			setProducts();
			$rootScope.setUrl('brand');
			$rootScope.$apply;
		}
		
		$rootScope.setUrl = function(type) {
			if (type == 'page') {
				window.location.hash = '?page=' + $rootScope.currentProduct._id.$oid;
			}
			if (type == 'brand') {
				if ($rootScope.currentCategory == null) {
					if ($rootScope.currentBrand == null) {
						window.location.hash = '?brand=null&category=null';
					} else {
						window.location.hash = '?brand=' + $rootScope.currentBrand._id.$oid + '&category=null';
					}
				} else {
					if ($rootScope.currentBrand == null) {
						window.location.hash = '?brand=null&category=' + escape($rootScope.currentCategory);
					} else {
						window.location.hash = '?brand=' + $rootScope.currentBrand._id.$oid + '&category=' + escape($rootScope.currentCategory);
					}
				}
			}
			if (type == null) {
				window.location.hash = '/';
			}
		}
		
		function setProducts() {
			if($rootScope.currentCategory == null && $rootScope.currentBrand == null){
				$rootScope.products = $rootScope.getRandomProducts();
			} else if(($rootScope.currentCategory == null || $rootScope.currentCategory == 'null') && $rootScope.currentBrand != null) {
				$rootScope.products = $filter('filter')($rootScope.allProducts, $rootScope.currentBrand.name);
			} else if ($rootScope.currentCategory != null && $rootScope.currentCategory != 'null' && $rootScope.currentBrand == null) {
				$rootScope.products = $filter('filter')($rootScope.getRandomProducts(), category);
			} else {
				$rootScope.products = $filter('filter')(categoryProducts, $rootScope.currentBrand.name);
			}
			document.getElementsByClassName('a-p-slide')[0].scrollTop = 0;
		}
		
		$rootScope.getRandomProducts = function(){
			var a = $filter('orderBy')($rootScope.allProducts, $scope.random);
			return $filter('limitTo')(a, 16, 0);
		}
		

		$rootScope.showDetails = function(id, type, category) {
			var found;
			if (type == 'product') {
				found = $filter('getById')($rootScope.allProducts, id);
				$rootScope.setCurrentProduct(found);
				moveSlide(2, 2);
			}
			if (type == 'brand') {
				found = $filter('getById')($rootScope.allBrands, id);
				$rootScope.setCurrentBrand(found);
				$rootScope.setCurrentCategory(category);
				
				moveSlide(2, 1);
			}
			
		}

		$(document).on('click', '.link_to', function(e){
			var toSection = this.getAttribute('data-anchor') || 0
			var toSlide = this.getAttribute('data-move-slide') || 0;
			moveSlide(toSection, toSlide);
		});
		
		function moveSlide(section, slide){
			$.fn.fullpage.moveTo(section, slide);
		}
		
		jQuery('#image-slider').bxSlider({
			controls: false,
			auto: true,
			autoHover: true
		});
		
		$(document).on('click', '.to_main', function(e){
			moveSlide(2, 0);
			moveSlide(1, 0);
		});
		
		$scope.changeSearch = function(){
			$scope.showSearch = event.target.value.length === 0 ? false : true
		}
		
		$scope.hideSearch = function(){
			$scope.showSearch = false;
		}
		
		$scope.setVersionTitle = function(ver){
			if(ver == 'EDP'){
				return 'Eau de Perfume - Парфюмированная вода'
			} else {
				return 'Eau de Toilette - Туалетная вода'
			}
		}
		
		store.isMenuActive = function(clickItem){
			if(clickItem == $rootScope.currentCategory) {
				return true;
			}
		};
		
		$rootScope.checkStartProduct = function() {
			var location = window.location.href.split('?')[1];
			if(typeof location != 'undefined') {
				if (location.indexOf('page') > -1) {
					var page = location.split('=')[1];
					if (typeof page != 'undefined') {
						$rootScope.showDetails(page, 'product');
						$rootScope.$apply;
					}
				}
				if (location.indexOf('brand') > -1) {
					var brand = location.split('&')[0].split('=')[1];
					var category = location.split('&')[1].split('=')[1];
					if (typeof brand != 'undefined') {
						$rootScope.showDetails(brand, 'brand', category);
						$rootScope.$apply;
					}
				}
			}
			
		}
		
		window.addEventListener('hashchange', function(){
			$rootScope.checkStartProduct();
		});
	});
})();