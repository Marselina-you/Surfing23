import $ from "jquery";
import Dots from "slick-carousel";

$.when( $.ready ).then(function() {
  $('.header__slider').slick({
    dots: true, //ЧТОБЫ нижний слайдер не ездил
    infinite: true,
    fade: true,
    prevArrow:  `<img class="slider-arrows slider-arrows__prev" src="img/arrows-prev.svg" alt=""></img>`,
    nextArrow:  `<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>`,
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({

    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    //dots: true,

  focusOnSelect: true


  });
})



//$(function() {

  //$(slider).slick({
   // infinite: true,
   // slidesToShow: 3,
   // slidesToScroll: 3
 // })
//})
