$(document).ready(function () {

  // header
  $('.header__switch').click(function() {
    $('.header__switch svg').toggle();
    $('.header__list').slideToggle(300);
  });

  $('.header__location-head').click(function() {
    $('.header__location').toggleClass('header__location--active');
    $('.header__location-body').slideToggle();
  });

  $(document).mouseup(function (e){
    var location = $('.header__location'); 
    if (!location.is(e.target) 
        && location.has(e.target).length === 0) { 
      location.find('.header__location-body').slideUp(); 
      location.removeClass('header__location--active'); 
    }
  });

  if($(window).width() < 767) {
    $('.header__entry').click(function() {
      $('.header__entry-icon').toggle();
    });
  }

    $('.header__entry-icon--close').click(function() {
    $.fancybox.close()
  });

  $('.header__nav-item').click(function(e){
    e.preventDefault();
    $('.header__nav-item-arrow').toggleClass('header__nav-item-arrow--active');
    $(this).find('.header__nav-sublist').slideToggle();
  });


  // tabs
  $('.tabs__header-item').click(function() {
    $(this)
    .addClass('tabs__header-item--active').siblings().removeClass('tabs__header-item--active')
    .closest('.tabs').find('.tabs__content').removeClass('tabs__content--active').eq($(this).index()).addClass('tabs__content--active');
  });

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


  $('[data-fancybox]').fancybox({

  });


  // slider-base
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


// product slider
var galleryThumbs = new Swiper('.product__slider-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.product__slider-top', {
      spaceBetween: 30,
      slidesPerView: 1,
      thumbs: {
        swiper: galleryThumbs
      }
    });


// calculator card
$('.calculator-page__card').click(function() {

  $('.calculator-page__card').not($(this)).removeClass('active');
  $(this).addClass('active');
});


// map
   ymaps.ready(init);
   function init () {
    var myMap = new ymaps.Map('map', {
     
      center: [54.718354, 55.989018], 
      zoom: 16
    });
    var myPlacemark = new ymaps.Placemark(
      [54.718354, 55.989018]        
      );
    myMap.geoObjects.add(myPlacemark);
  }



});
