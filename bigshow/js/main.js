$(document).ready(function(){
	"use strict";
    /* ===============================  click on the filter-btn to add class show to the form ==============================*/
    $(".filter").click(function(){
        $(".forma-group").addClass('show');
    })
    $(".responsev-ul").click(function(){
        $(".forma-group").removeClass('show');
    })
    
    /* ===============================  click on the nav-btn to tranform (x) over-lay and ul ==============================*/
    $(".nav-btn").click(function(){
        $(this).addClass('active');
        $(".overlay").removeClass('overlay-transform');
        $(".pure-nav .container .nav").removeClass('transform-x');
    })
    
/* ===============================  when i click on the over-lay , will remove class transform from ul and over-lay  ==============================*/
    $(".overlay").click(function(){
        $(".overlay").addClass('overlay-transform');
        $(".pure-nav .container .nav").addClass('transform-x');
        $(".nav-btn").removeClass('active');
    })
    /* ===============================  open some input when i click on them , and close other input ==============================*/
    $(".group").click(function() {
        $(".group").removeClass('open');
        $(this).addClass('open');
    });
    $(".sec-slider .item img").hover(function(){
        $('.item').find('.opact').removeClass('show');
        $(this).parents('.item').find('.opact').addClass('show');
    })
    
    /* ===============================  start the main-slider ==============================*/
    $('.main-slider').owlCarousel({
    loop:true,
        rtl:true,
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
}); 
    /* ===============================  start the sec-slider ==============================*/
    $('.sec-slider').owlCarousel({
    loop:true,
    rtl:true,
    nav:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
    
    /* ===============================  start the brand-slider ==============================*/
    $('.brand-slider').owlCarousel({
    loop:true,
    rtl:true,
    dots:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
    
});
