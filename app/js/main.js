$(function(){

  $('.top-slider__wrapper').slick({
    dots: true,
    arrows:false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#8d8d8d",
    ratedFill: "#ffc35b",
    readOnly: true
  });

});