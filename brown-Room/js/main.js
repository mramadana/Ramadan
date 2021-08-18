$(document).ready(function () {
    "use strict";
    var isRtl = $("html[lang='ar']").length > 0;
    console.log(isRtl);
$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: false,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
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

$(".button-box").click(function () {
    $(".side-bar-content").addClass('active');
});

$(".side-bar-content .mobil-nav li a").click(function (e) {
    e.preventDefault();
    $(this).next('.menu-ul').addClass('active')
});

$(".side-bar-content .mobil-nav li .back").click(function (e) {
    e.preventDefault();
    $(this).parents('ul').removeClass('active');
});

$(".service-box .close-nav").click(function () {
    $(this).parents('.side-bar-content').removeClass('active')
})
    
});
    /*================================= loader =======================================*/
    $(window).on('load', function() {
        setTimeout(function() {
            $(".loader").fadeOut();
            $("body").css("overflow", "auto");
            $(".loader").hide()
        },3000)
    })