$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
    });
});

$(document).ready(function () {

    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="9.648" height="17.429" viewBox="0 0 9.648 17.429"><g transform="translate(0.5 0.558)"><path class="st0" d="M1,17.4C1,17.4,1,17.4,1,17.4c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7-7l-7-7c-0.4-0.4-0.4-1,0-1.4 s1-0.4,1.4,0l7.7,7.7c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-7.7,7.7C1.5,17.3,1.2,17.4,1,17.4z"/></g></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg" width="9.706" height="17.429" viewBox="0 0 9.706 17.429"><g transform="translate(0.5 0.558)"><path class="st0" d="M8.7,17.4C8.7,17.4,8.7,17.4,8.7,17.4c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-7-7l7-7c0.4-0.4,0.4-1,0-1.4 S8.4,0,8,0.3L0.3,8.1C0.1,8.2,0,8.5,0,8.7C0,9,0.1,9.2,0.3,9.4L8,17.1C8.2,17.3,8.4,17.4,8.7,17.4z"/></g></svg>'],
    });
    /////////cats Slider/////////
    $('.cats-slider').owlCarousel({

        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
                loop: true,
                margin: 15,
            },
            480: {
                items: 3,
                margin: 15,
            },
            767: {
                items: 4,
                margin: 15,
            },
            992: {
                items: 5,
                margin: 15,
            },
            1200: {
                items: 6,
                margin: 20,
            },

        }
    });
    /////////products Slider/////////
    $('.products-slider').owlCarousel({
        margin: 18,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            767: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            },
            1700: {
                items: 6
            },
        }
    });
    /////////brands Slider/////////
    $('.brands-slider').owlCarousel({
        margin: 18,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 3,
            },
            767: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6
            },
            1500: {
                items: 7,
            },
            1700: {
                items: 8,
            },
        }
    });

    /////Media////
    if ($(window).width() >= 1200) {
        $(".cats-display").unwrap();
        $(".cat-head").unwrap();
        $(".sub-ul").unwrap();
    }
    if ($(window).width() <= 1199) {
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(400);
            $(".mo-overlay").fadeIn(400);
            $(".mo-navbar").addClass("nav-in");
            $("body").addClass("overflow");
        });
        $('.mo-overlay').click(function () {
            $("nav").fadeOut(400);
            $(".mo-overlay").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.close-menu').click(function () {
            $("nav").fadeOut(400);
            $(".mo-overlay").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $("body").removeClass("overflow");
        });

        $('.lev-2').on('show.bs.collapse', function () {
            $(".lev-2").not(this).collapse('hide');
        });
        $('.lev-3').on('show.bs.collapse', function () {
            $(".lev-3").not(this).collapse('hide');
        });


    }

    if ($(window).width() <= 767) {
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(300);
            $(".search-cont").addClass("open");
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-cont").removeClass("open");
            $(".search-form").fadeOut(400);
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }
    ////////////////////////////acc/////
    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings('.nav-foot').css('padding-top', "15px");
            $(this).siblings('.cats-display').css('padding-top', "10px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings('.nav-foot').css('padding-top', "0");
            $(this).siblings('.cats-display').css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
        $(".mo-accordion").not(this).siblings('.cats-display').css('padding-top', "0");
    })
});



$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});