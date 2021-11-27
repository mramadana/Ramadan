$(document).ready(function () {
    "use strict";
    /*=============== show cards list when i click on cards ==================*/
    $(".icon .cards").click(function (e) {
        e.stopPropagation();
        $(".dropdow-cards").fadeToggle(500);
        $(".inner-nav .input, .inner-nav .input input").removeClass('open');
    });

    /*=============== show menu list when i click on button ==================*/
    $(".nav-btn").click(function () {
        $(".navs, .over-lay").addClass('show');
        $(".inner-nav .input, .inner-nav .input input").removeClass('open');
        $(".dropdow-cards").fadeOut()
    });

    $(".over-lay").click(function () {
        $(".navs, .over-lay").removeClass('show');
    });

    $(document).click(function () {
        $(".drop-lang").removeClass('show');
    });

    $(".btn-nav-lang").click(function (e) {
        e.stopPropagation();
        $(".drop-lang").toggleClass('show');
    });


    $(".clos").click(function () {
        $(this).parents('.item-dropdow-cards').fadeOut();
        $("form.forma-group").addClass('transition');
        $("form.forma-group").removeClass('show');
    });

    $(".icon-search").click(function () {
        $("form.forma-group").addClass('show');
        
    });

    $('.main-slider').owlCarousel({
        loop: true,
        rtl: true,
        dots: true,
        smartSpeed: 900,
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

    /* add class to input when i click icon */
    $(".input .div-icon").click(function (e) {
        event.preventDefault();
        $(".inner-nav .input, .inner-nav .input input").toggleClass('open');
        $(".dropdow-cards").fadeOut()

    });

    $(".signup-section").click(function () {
        $(".dropdow-cards").fadeOut();
        $(".inner-nav .input, .inner-nav .input input").removeClass('open');
    });
    
    
    /*=================== start products-slider ===================== */
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
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    
    /*============== brand-slider =================*/
        $('.brand-slider').owlCarousel({
        rtl: true,
        margin: 10,
        smartSpeed: 700,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    });
    
    /* ======================= start the vertical -nav ============================ */
    $(".vertical .item .button, .vertical .item a").click(function(e) {
            e.preventDefault();
        $(".vertical .item ul").stop().slideUp();
        $(this).parents('.item').find('ul').stop().slideToggle();
        $(this).parents('.item').nextAll().find('.button span').removeClass('rotate');
        $(this).parents('.item').prevAll().find('.button span').removeClass('rotate');
        $(this).parents('.item').find('.button span').toggleClass('rotate');
    });
    
    /* ======================= start the vertical -nav ============================ */
    $(".list .i-list").click(function(e) {
        e.preventDefault();
        $(".category-photo .tg-class").removeClass('col-lg-4 col-md-4');
        $(".category-photo .tg-class").addClass('col-lg-12');
        $(".category-photo .tg-class").addClass('col-md-12');
    });
    
        $(".list .i-table").click(function(e) {
        e.preventDefault();
        $(".category-photo .tg-class").removeClass('col-lg-12 col-md-12');
        $(".category-photo .tg-class").addClass('col-lg-4');
        $(".category-photo .tg-class").addClass('col-md-4');
        $(".category-photo .tg-class").addClass('col-sm-12');
    });
    
    
    /* when i click on any photo - she will apend to in the box-apend*/
    
    $(".denamo-section .right img").click(function () {
        $('.box-apend').empty();
        $(".box-apend").append(`<img src="${$(this).attr('data-src')}">`);
    });
    
    
    
    
    
    
    /*=============== js for input number + and - ==============*/
    
        $(document).ready(function () {
          jQuery('<div class="quantity-nav"><button class="quantity-button quantity-up">&#xf077;</button><button class="quantity-button quantity-down">&#xf078</button></div>').insertAfter('.quantity input');
          jQuery('.quantity').each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.quantity-up'),
                btnDown = spinner.find('.quantity-down'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue >= max) {
                var newVal = oldValue;
              } else {
                var newVal = oldValue + 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
            });

            btnDown.click(function () {
              var oldValue = parseFloat(input.val());
              if (oldValue <= min) {
                var newVal = oldValue;
              } else {
                var newVal = oldValue - 1;
              }
              spinner.find("input").val(newVal);
              spinner.find("input").trigger("change");
            });

          });
        });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})
