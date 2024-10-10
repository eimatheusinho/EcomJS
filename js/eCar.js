$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      margin: 10,
      loop: true,
      responsiveClass:true,
      responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
          loop:false
      }
      }
    });
  });