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
  // var swiper = new Swiper('.slider-base', {
  //   slidesPerView: 4,
  //   spaceBetween: 30,
  //   loop: !0,
  //   navigation: {
  //     nextEl: '.slider-base__arrow--next',
  //     prevEl: '.slider-base__arrow--prev',
  //   },
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 1
  //     },
  //     768: {
  //       slidesPerView: 2
  //     },
  //     1200: {
  //       slidesPerView: 3
  //     }
  //   }
  // });

  var mySwiper = undefined;
  function initSwiper() {
    var screenWidth = $(window).width();
    if(screenWidth > 768 && mySwiper == undefined) {            
      mySwiper = new Swiper('.slider-base', {            
       slidesPerView: 4,
       spaceBetween: 30,
       loop: !0,
       navigation: {
        nextEl: '.slider-base__arrow--next',
        prevEl: '.slider-base__arrow--prev',
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 143
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 60
        }
      }
    });
    } else if (screenWidth < 768 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
      jQuery('.swiper-wrapper').removeAttr('style');
      jQuery('.swiper-slide').removeAttr('style');            
    }        
  }

//Swiper plugin initialization
initSwiper();

//Swiper plugin initialization on window resize
$(window).on('resize', function(){
  initSwiper();        
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
