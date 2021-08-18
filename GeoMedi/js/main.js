$(document).ready(function () {
    "use strict";
    var isRtl = $("html[lang='ar']").length > 0;
    $(".btn-nav-lang").click(function (e) {
        e.stopPropagation();
        $(".drop-lang").removeClass("show");
        $(this).find(".drop-lang").addClass("show");
    });
    /* ======================= drop-down-lang =============================*/
    $(document).click(function () {
        $(".drop-lang").removeClass("show");
    });

    // ====================== dark-dome ======================================

    $(".dark-mode").click(function () {
        $(this).toggleClass('active');
        $("body").toggleClass('dark-theme');
        if ($(this).hasClass('active')) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
        console.log(localStorage.mode)
    });

    /*============= if ================*/
    if (localStorage.mode == "dark") {
        $("body").addClass('dark-theme');
        $(".dark-mode").addClass('active')
    };

    /*====================== responsive-footer-links-collapse=======================*/
    if ($(window).width() <= 768) {
        $(".footer .foot-title").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings(".links").stop().slideUp();
            } else {
                $(".footer .foot-title").removeClass('active')
                $(".footer .links").stop().slideUp();
                $(this).addClass('active')
                $(this).siblings(".links").stop().slideDown();
            }
        });
    };

    /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    $(".nav-btn").click(function () {
        $(".side-bar-content").addClass('active');
    });

    $(".service-box .close-nav").click(function () {
        $(this).parents('.side-bar-content').removeClass('active')
    });

    $(".side-bar-content .mobil-nav li a").click(function (e) {
        e.preventDefault();
        $(this).next('.menu-ul').addClass('active')
    });

    $(".side-bar-content .mobil-nav li .back").click(function (e) {
        e.preventDefault();
        $(this).parents('ul').removeClass('active');
    });

    /*============= toggle-class-open in responsive-sc when i click it =========================*/
    $(".responsive-search-btn").click(function (e) {
        $(".search-container").addClass('active');
    });

    $(".search-container .close-search").click(function (e) {
        $(".search-container").removeClass('active')
    });

    // when i click on cart ==========================================
    $(".cart-over-lay").click(function () {
        $(".over-lay-cart").addClass('active')
    })
    $(".close-cart").click(function () {
        $(".over-lay-cart").removeClass('active')
    });

    $(".bottom-nav a").click(function () {
        $(".bottom-nav a").removeClass('active');
        $(this).addClass('active')
    });

    // ====================== main slider ======================================
    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        rtl: isRtl,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        margin: 10,
        dots: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        autoplay: true,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms",
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s",
        });
    };

    // slider >>> payments
    $('.payment-slider').owlCarousel({
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
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive: {
            0: {
                items: 1,
                /*autoplay: true,*/
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

    /*===================== products-slide =========================*/

    $('.products-slide').owlCarousel({
        loop: true,
        margin: 10,
        rtl: isRtl,
        autoplay: false,
        dots: false,
        touchDrag: false,
        mouseDrag: false,
        autoplaySpeed: 2000,
        autoplayTimeout: 2000,
        smartSpeed: 2000,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            320: {
                items: 1,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 3000,
            },
            375: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 3000,
            },
            425: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                autoplaySpeed: 3000,
                autoplayTimeout: 5000,
                smartSpeed: 3000,
            },
            600: {
                items: 3,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1000: {
                items: 4,
            }
        }
    });


    // slider >>> brands
    $('.brand-slider').owlCarousel({
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
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
                margin: 0,
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
                items: 4,
                autoplay: true,
                touchDrag: true,
                mouseDrag: true,
                loop: true,
            },
            1024: {
                items: 5
            },
            1025: {
                items: 6
            }
        }
    });
    
    $(".heart-ic").click(function(e) {
        e.preventDefault();
    });
    
    $(".heart-ic .fa-heart").click(function(e) {
        $(this).toggleClass('far');
        $(this).toggleClass('fas');
    })
    
    $('.modal-categories .close-search').click(function() {
        $('.modal').removeClass('fade')
    })
    
    
    
    
    
    
    
    
});
    $(window).on('load', function () {
        setTimeout(function () {
            $("body").css("overflow", "auto");
            $(".loader-over-lay").hide()
        }, 2000)
    })
