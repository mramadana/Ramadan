$(document).ready(function () {
    "use strict";
    var isRtl = $("html[lang='ar']").length > 0;
        /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    
  $('#myModal').on('shown.bs.modal', function () {
  $('#video1')[0].play();
})
$('#myModal').on('hidden.bs.modal', function () {
  $('#video1')[0].pause();
})
    
        $(".products-slider").owlCarousel({
        margin: 10,
        rtl: true,
        nav: true,
        dots:false,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
                responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 3
            }
        }
    });
    
    
    
        // slider >>> info
    $('.info-slider').owlCarousel({
        loop: false,
        rtl: isRtl,
        margin: 10,
        nav: false,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            
            375: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true, 
            },
            
            425: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            600: {
                items: 3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1000: {
                items: 4
            }
        }
    });
    

    
    $(".nav-btn").click(function () {
        $(".side-bar-content").addClass('active');
    });

    $(".service-box .close-nav").click(function () {
        $(this).parents('.side-bar-content').removeClass('active')
    });

    $(".side-bar-content .mobil-nav .menu-ul").prev('a').click(function (e) {
        e.preventDefault();
        $(this).next('.menu-ul').addClass('active')
    });

    $(".side-bar-content .mobil-nav li .back").click(function (e) {
        e.preventDefault();
        $(this).parents('ul').removeClass('active');
    });
    
    
    
    /* =================== start client-slider ==========================*/
    
    $('.slid-clients').owlCarousel({
    loop:true,
    margin:10,
    rtl: isRtl,
    nav:true,
    autoplaySpeed: 3000,
    autoplayTimeout: 2000,
    smartSpeed: 2000,
    nav: true,
    dots: false,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
    
    
    
$(window).scroll(function() {
    if($(window).scrollTop() > 200) {
        $(".nav-bar").addClass('fixed')
    } else {
        $(".nav-bar").removeClass('fixed')
    }
});
    
    
        /*====================== responsive-footer-links-collapse=======================*/
    
    if ($(window).width() <= 768) {
        $(".section-footer .foot-title").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings(".links").stop().slideUp();
            } else {
                $(".footer .foot-title").removeClass('active')
                $(".footer .links").stop().slideUp();
                $(this).addClass('active')
                $(this).siblings(".links").stop().slideDown();
                $(this).siblings(".links").css("display", "flex");
            }
        });
    };
    
    
    

    
    
    
    
    
    
    
    
});
