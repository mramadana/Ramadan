$(document).ready(function () {
    "use strict";
    /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    $(".btn-nav-ul").click(function () {
        $(this).addClass('active');
        $(".over-lay").removeClass('transform-x');
        $("ul.nav.nav-pills.navs").removeClass('transform-x')
    });

    /*========================== add class over-lay to body and ul when i click on over-lay */
    $('.over-lay').click(function () {
        $(".btn-nav-ul").removeClass('active');
        $(".over-lay").addClass('transform-x');
        $("ul.nav.nav-pills.navs").addClass('transform-x')
    });
    $(".products-slider").owlCarousel({
        margin: 10,
        rtl: true,
        nav: true,
        dots: false,
        smartSpeed: 900,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    /*var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();

    var output = d.getFullYear() + '/' +
        ((''+month).length<2 ? '0' : '') + month + '/' +
        ((''+day).length<2 ? '0' : '') + day;
        $("#results").append(output);*/







    /*    $(".plus").click(function (e) {
            e.preventDefault();
            var $this = $(this);
            var $input = $this.siblings('input');
            var value = parseInt($input.val());
            if (value < 1) {
                value = value + 1;
            } else {
                $input.hide();
            }
            $input.val(value);
        });

        $("#inputField").on('change', function () {
            if ($(this).val() <= 0)
                $(this).val(0);
            checkAndDisable();
        });

        function checkAndDisable() {
            $(".minus").removeAttr('disabled');
            if ($("#inputField").val() == 0) {
                $(".minus").attr('disabled', true);
            }
        }*/









    $(".ico").click(function (e) {
        e.preventDefault();
        var countSpan = $(this).siblings(".count"),
            countVal = parseInt(countSpan.html())
        console.log($(this).hasClass("active"));
        if ($(this).hasClass("active")) {


            $(this).removeClass('active');
            if (countVal == 1) {

                countSpan.html(0); /*=======*/

            } else {
                countSpan.html(countVal - 1)
            }


        } else {

            $(this).addClass('active');
            if (isNaN(countVal)) {
                console.log(countVal);


                countSpan.html(1);

            } else {

                countSpan.html(countVal + 1);
            }


        }
    });









});

$(function () { // Dropdown toggle
    $('.dropdown-toggle').click(function (e) {
        e.preventDefault();
        $(this).next('.dropdown').slideToggle();
    });

    $(document).click(function (e) {
        var target = e.target;
        if (!$(target).is('.buttons .dropdown-toggle') && !$(target).parents().is('.buttons .dropdown-toggle'))
        //{ $('.dropdown').hide(); }
        {
            $('.buttons .dropdown').slideUp();
        }
    });
});









/*

*/
