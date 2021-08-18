$(window).on('load', function() {
    jQuery(".loader").fadeOut(2000);
})
$(document).ready(function () {
    /*start the loading page */
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //change navbar color on scroll
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    //start active navbar
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('active');
        $('.navbar-nav').toggleClass('acitve-nav');
        $('body').toggleClass('overflowNone')
    });
    $('.fa-plus').click(function(){
        $('.categ-dropdown').toggleClass('active-categ-dropdown');
    });
      //data fancybox 
      $('[data-fancybox]').fancybox({
        protect: true ,
        loop: false,
        keyboard: false,
        arrows: false,
        wheel: false,
        closeExisting: false,
        preventCaptionOverlap: true,
        modal: false,
        infobar: false,
        hideScrollbar: true,
        touch: false ,
        buttons: [
            "close"
        ],
        image: {
            preload: true
        },

    });
    //owl header screen 
    $('.owl-services').owlCarousel({
        rtl: true,
        dots: false,
        loop:true,
        margin:10,
        nav:true,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
    //clients slider 
    $('.owl-clients').owlCarousel({
        rtl: true,
        dots: false,
        loop:true,
        margin:10,
        nav:true,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
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
    });
});