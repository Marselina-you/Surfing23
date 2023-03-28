import $ from "jquery";
import Dots from "slick-carousel";

$.when( $.ready ).then(function() {
  $('.header__slider').slick({
    dots: true, //ЧТОБЫ нижний слайдер не ездил
    infinite: true,
    fade: true,
    prevArrow:  `<img class="slider-arrows slider-arrows__prev" src="img/arrows-prev.svg" alt=""></img>`,
    nextArrow:  `<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>`,
    asNavFor: '.slider-dotshead',
  });

  $('.slider-dotshead').slick({

    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',

    //dots: true,
    focusOnSelect: true


  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:  `<img class="slider-arrows slider-arrows__prev" src="img/arrows-prev.svg" alt=""></img>`,
    nextArrow:  `<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>`,
    asNavFor: '.slider-map',
  });
  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true

  });

  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:  `<img class="slider-arrows slider-arrows__prev" src="img/arrows-prev.svg" alt=""></img>`,
    nextArrow:  `<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>`,
  });
  $('.holder__slider, .shop__slider').slick({
    infinite: true,
    fade: true,

    prevArrow:  `<img class="slider-arrows slider-arrows__prev" src="img/arrows-prev.svg" alt=""></img>`,
    nextArrow:  `<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>`,
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt=""></div></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.on('click', function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.on('click', function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1)* $('.summ').data('guests');
    $('.summ').html('$' + summ);
  })

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1)* $('.summ').data('guests');
  $('.summ').html('$' + summ);


  $('.surfboard-box__circle').on('click', function() {

    $(this).toggleClass('active');
  });

$('.menu-btn').on('click', function() {
  $('.menu').toggleClass('active');
})

});




