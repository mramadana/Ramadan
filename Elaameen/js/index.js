// sidebar menu toggle

$(document).on('click', '#sidebar_toggler', function() {
  $('#sidebar_toggler').hide();
  $('.sidebar-wrapper').addClass('sidebar-show');
   $('.mob-overlay').addClass('active');
});

$(document).on('click', '#burgerBtn', function() {
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('.mob-overlay').removeClass('active');
  $('#sidebar_toggler').show();
});

$(document).on('click', '.mob-overlay', function() {
  $('#sidebar_toggler').show();
  $('.sidebar-wrapper').removeClass('sidebar-show');
  $('.mob-overlay').removeClass('active');
});

//loader
$(function() {
  $('.loader-container').fadeOut();
})


//partners section
$(function(){
  $('.five_items_carousel').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right"></i></button>',
    dots: false,
    arrows: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        infinite: true
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }
  ]
  });
});

// scroll top button
$(function () {

  var scrollButton = $('.go-top');

  $(window).scroll(function () {

    if($(window).scrollTop() >= 500) {
      scrollButton.show();
    }else {
      scrollButton.hide();
    }
  });

  scrollButton.click(function () {
    $('html, body').animate({scrollTop: 0});
  })
});


// toggle call us section

$(document).on('click', '.toggle-call-list', function() {
  $('.toggle-call-list .fa').toggleClass('fa-commenting-o').toggleClass('fa-times').css('transform', 'rotate(360deg)');
  $('.call-list').fadeToggle();
});


  
  
  



