import $ from "jquery";

$.when( $.ready ).then(function() {
  $('.header__slider').slick({
    infinite: true,
    slidesToShow: 3,
  });
})



//$(function() {

  //$(slider).slick({
   // infinite: true,
   // slidesToShow: 3,
   // slidesToScroll: 3
 // })
//})
