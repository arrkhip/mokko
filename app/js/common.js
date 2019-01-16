$(document).ready(function () {
  // promo slider
  var swiper = new Swiper('.promo__slider', {
  	pagination: {
  		el: '.promo__slider-pagination',
  		clickable: true,
  		renderBullet: function (index, className) {
  			return '<span class="' + className + '">' + (index + 1) + '</span>';
  		},
  	},
  });

});
