$(document).ready(function () {

  // promo slider
  var swiper = new Swiper('.promo__slider', {
  	speed: 700,
  	pagination: {
  		el: '.promo__slider-pagination',
  		clickable: true,
  		renderBullet: function (index, className) {
  			return '<span class="' + className + '">' + (index + 1) + '</span>';
  		},
  	},
  });


  //slider
  var swiper = new Swiper('.index-page__sort-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: !0,
    navigation: {
      nextEl: '.index-page__sort-slider-arrow--prev',
      prevEl: '.index-page__sort-slider-arrow--next',
    },
    breakpoints: {
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });


  // quantity
  $('.quantity__minus').click(function () {
   var $input = $(this).parent().find('input');
   var count = parseInt($input.val()) - 1;
   count = count < 1 ? 1 : count;
   $input.val(count);
   $input.change();
   return false;
 });
  $('.quantity__plus').click(function () {
   var $input = $(this).parent().find('input');
   $input.val(parseInt($input.val()) + 1);
   $input.change();
   return false;
 });

});
