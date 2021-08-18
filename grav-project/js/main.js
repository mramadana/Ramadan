$(window).on('load', function () {
    $(".loder").addClass('show');
    $(".loder .loding:first-child").animate({
        top: '20%',

    }, 1000, function () {
        $(".loder .loding:nth-child(2)").animate({
            top: '35%',
        }, 1000, function () {
            $(this).animate({
                left: '32%'
            }, 2000)
        });

        $(".loder .loding:nth-child(3)").animate({
            top: '35%',
        }, 1000, function () {
            $(this).animate({
                right: '32%'
            }, 2000, function () {
                $(this).parent().fadeOut(1000);
                $("body").css("overflow", "auto");
            })
        });
    });

});


$(document).ready(function () {
    "use strict";
    /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    $(".btn-nav-ul").click(function () {
        $(this).addClass('active');
        $(".nav-bar .inner .over-lay").removeClass('transform-x');
        $("ul.nav.nav-pills.navs").removeClass('transform-x')
    });
    /*========================== add class over-lay to body and ul when i click on over-lay */
    $('.nav-bar .inner .over-lay').click(function () {
        $(".btn-nav-ul").removeClass('active');
        $(".nav-bar .inner .over-lay").addClass('transform-x');
        $("ul.nav.nav-pills.navs").addClass('transform-x')
    });

    $(document).click(function () {
        $(".drop-lang").removeClass('show');
    });

    $(".btn-nav-lang").click(function (e) {
        e.stopPropagation();
        $(".drop-lang").toggleClass('show');
    });

    /*=========================== main-slider  ====================*/
    $('.main-slider').owlCarousel({
        loop: true,
        rtl: true,
        dots: false,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*=========================== start vedio-slider ===================================*/

    $(".slid-vedio").owlCarousel({
        items: 1,
        margin: 10,
        rtl: true,
        nav: true,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"]
    });

    $(".slider-vedio .div-icon").click(function () {
        $(".over-lay-vedio").fadeIn(10, function () {
            $(".section-vieo-div").addClass('show');
        })
    });

    $(".over-lay-vedio").click(function () {
        $(".section-vieo-div").removeClass('show');
        $(this).fadeOut();
    });



    $(".info-slider .div-icon").click(function () {
        $(".over-lay-vedio-2").fadeIn(10, () => {
            var source = $(this).parents('.item').attr('data-src');
            $(".section-vieo-div-2").empty();
            console.log(source);
            console.log($(this).parents('.item'));
            $(".section-vieo-div-2").addClass('show');
            if ($(this).parents('.item').attr('data-type') == 'frame') {
                $(".section-vieo-div-2").append(`<iframe src="${source}"> </iframe>`)
            } else {
                $(".section-vieo-div-2").append(`<video src="${source}" controls> </video>`)
            }

        });

        $(".over-lay-vedio-2").click(function () {
            $(".section-vieo-div-2").removeClass('show');
            $(this).fadeOut();
            $('video').trigger('pause');
        });
    });
    /* =================================== start s-slider ===================================*/
    $('.b-slider').owlCarousel({
        loop: true,
        rtl: true,
        video: true,
        lazyLoad: true,
        center: false,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $(window).on('load', function () {

        $(".img-box").append(`<img src="img/Mask%20Group%202.png">`)
        /*
            $(".img-box").append(`<video src="${$(this).attr('data-src')}" controls> </video>`)
        */
    })

    $(".b-slider .item").click(function () {
        var source = $(this).attr('data-src');
        $('.img-box').empty();
        if ($(this).attr('data-type') == 'video') {
            $(".img-box").append(`<video src="${$(this).attr('data-src')}" controls> </video>`)
        } else {
            $(".img-box").append(`<img src="${$(this).attr('data-src')}">`)
        }
    });

    /* when i click this over-lay slider-img will fade-out*/
    $(".video-img-slider .over-lay").click(function () {
        $(".video-img-slider .over-lay").removeClass('show');
        $(".img-box").removeClass('show');
    })

    /* =================================== start info-slider ===================================*/

    $('.info-slider').owlCarousel({
        loop: true,
        rtl: true,
        video: true,
        lazyLoad: true,
        merge: true,
        center: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* =================================== start info-slider ===================================*/

    $(".the-Subscription ul li:odd").css("background-color", "hsl(0deg 0% 69%)");
    $(".the-Subscription-2 ul li:odd").css("background-color", "hsl(0deg 0% 69%)");

});
