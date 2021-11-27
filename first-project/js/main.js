$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;

    // var scene = $( '.c-scene' );

    // // Initialise the scrollmagic controller
    // var scrollMagicController = new ScrollMagic.Controller({
    //     globalSceneOptions:
    //     {
    //         triggerHook: 'onLeave'
    //     }
    // });
    
    // // Loop through each scene and create a new
    // // scrollmagic scene for each one
    // scene.each( function() 
    // {
    //     var scene = new ScrollMagic.Scene({
    //         triggerElement: this
    //     })
    //     .setPin( this )
    //     .addTo( scrollMagicController )
    //     .addIndicators()
    //     .setClassToggle( scene, 'is-active' )
    // });
    
    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        margin: 10,
        dots: false,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                nav: false
            },
            600: {
                nav: false
            },
            1000: {
                nav: true
            }
        }
        
      });

    $(".nav-btn").click(function() {
        $(".nav-ul").addClass('show');
        $(".overlay-body").addClass('show');
        $(this).addClass('active');
    })
    
    // over-lay on click
    $(".overlay-body").click(function() {
        $(".nav-ul").removeClass('show');
        $(".overlay-body").removeClass('show');
        $(".nav-btn").removeClass('active')
    });

    // start to PORTFOLIO function 
    $(function(){
        $('#mixer').mixItUp();
      });
    
    //   start to back-to-top button
    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $(".back-to-top").addClass('show')
        } else {
            $(".back-to-top").removeClass('show')
        }
    });

    // when i click back-to-top
    $(".back-to-top").click(function() {
        $("html").scrollTop(0);
        });
// vedio section /////////////////////
/*

- Fallback bokuh
- webm?
- poster=""
- Full page always
- Full page then scroll
- Just header
- Browser compat

*/
})
