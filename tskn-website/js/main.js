$(document).ready(function () {
    "use strict";
    let isRtl = $('html[lang="ar"]').length > 0;
// when click to responsive btn show ul and overlay
    $(".nav-btn").click(function() {
      $(this).addClass('active');
      $(".nav-links").addClass('active');
      $(".nav-overlay").addClass('show')
    })

    // when i click on overlay remove class show and remove ul

    $(".nav-overlay").click(function() {
      $(".nav-btn").removeClass('active');
      $(".nav-links").removeClass('active');
      $(".nav-overlay").removeClass('show')
    })
    
    // select-2
    $('.select-plugin').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $('.select').select2({
      dir: isRtl ? "rtl" : "ltr"
  });

  $(".nav-item .nav-link").click(function() {
    $(".nav-item").removeClass('active');
    $(this).parents('.nav-item').addClass('active')
  })

  
  /*====================== responsive-footer-links-collapse=======================*/
  if ($(window).width() <= 768) {
    $(".footer-section .links").stop().slideUp(0);
    $(".foot-title").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings(".links").stop().slideUp();
        } else {
            $(".foot-title").removeClass('active')
            $(".footer-section .links").stop().slideUp();
            $(this).addClass('active')
            $(this).siblings(".links").stop().slideDown();
        }
    });
  };

  $(':input[type="number"]').on("input", function() {
    var nonNumReg = /[^0-9]/g
    $(this).val($(this).val().replace(nonNumReg, ''));
  })

  // filter-icon / when i click it show filter-sidebar and overlay
  $(".filter-icon").click(function() {
    $(".filter-input").addClass('show');
    $(".overlay-filter-input").addClass('show');
  });

  $(".overlay-filter-input").click(function() {
    $(".filter-input").removeClass('show');
    $(this).removeClass('show');
  });

  $( ".addphonenum" ).focus(function() {
    $(this).parents('.added-another-input').addClass('show')
  });

// input range 
    if($(".js-range-slider").length > 0) {
      $(".js-range-slider").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800, 
        prefix :`<span class="${ $(".js-range-slider").attr("data-curensy")}">${ $(".js-range-slider").attr("data-curensy")}</span>` 
      });
    }

    if($(".js-range-slider-2").length > 0){
      $(".js-range-slider-2").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800, 
        prefix :`<span class="${ $(".js-range-slider-2").attr("data-curensy")}">${ $(".js-range-slider-2").attr("data-curensy")}</span>` 
      });
    }
    if($(".js-range-slider-3").length > 0){
      $(".js-range-slider-3").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800, 
      });
    }
    if($(".js-range-slider-4").length > 0){
      $(".js-range-slider-4").ionRangeSlider({
        type: "double",
        // grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800, 
        prefix :`<span class="${ $(".js-range-slider-4").attr("data-curensy")}">${ $(".js-range-slider-4").attr("data-curensy")}</span>` 
      });
    }

    $('.category-box .fave, .room-banner .inner .icons .icon').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('active');
    });
    
});