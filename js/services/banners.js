(function(){
	angular.module('StoreApplication').factory('Banners', function BannersFactory(){
		var banners = [
			'http://luxparfum.by/img/banners/hero.jpg',
			'http://luxparfum.by/img/banners/hero1.jpg',
			'http://luxparfum.by/img/banners/hero2.jpg',
		];
		
		return {
			three: function(){
				return banners;
			}
		};
	});
})();