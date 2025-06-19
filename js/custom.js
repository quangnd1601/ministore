// JavaScript Document
$('#banner-list').owlCarousel({
    loop:true,
    margin:30,
	nav:true,
	autoplay:true,
	smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

