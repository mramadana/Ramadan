$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;

    // open and close nav in responsive
    $(".nav-btn").click(function() {
        $(".main-nav .overlay").addClass('show');
        $(".main-nav .nav-links").addClass('show');
    })
    $(".main-nav .overlay").click(function() {
        $(".main-nav .nav-links").removeClass('show');
        $(".main-nav .overlay").removeClass('show');
    });

    // window scroll 
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 1) {
            $(".header-bg").slideDown();
        } else {
            $(".header-bg").slideUp();
        }
    })

    // main-slider
    $('.main-slider').owlCarousel({
        items:1,
        loop:true,
        rtl:isRtl,
        margin:10,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        nav:false,
    });

    // servies -- slider 
    $('.serv-slider').owlCarousel({
        loop:true,
        rtl:isRtl,
        margin:15,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav:false,
        responsive:{
            320:{
                items:1,
                dots:false
            },
            425:{
                items:2,
                dots:false
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    // map slider 
    $('.slid-map').owlCarousel({
        loop:true,
        rtl:isRtl,
        margin:15,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav:false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    // slid-share
    $('.slid-share').owlCarousel({
        loop:true,
        rtl:isRtl,
        margin:15,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        nav:false,
        responsive:{
            0:{
                items:2,
                dots:false
            },
            600:{
                items:4,
                dots:false
            },
            1024:{
                items:5
            },
            1440:{
                items:7
            }
        }
    })
});
