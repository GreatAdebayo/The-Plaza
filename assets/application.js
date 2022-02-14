'use strict';


$(document).ready(function () {
    /*------------------
        Product filter
    --------------------*/
    if ($('#product-filter').length > 0) {
        var containerEl = document.querySelector('#product-filter');
        var mixer = mixitup(containerEl);
    }
});

(function ($) {
    /*------------------
        Navigation
    --------------------*/
    $('.nav-switch').on('click', function (event) {
        $('.main-menu').slideToggle(400);
        event.preventDefault();
    });


    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });




    /*------------------
        Navbar Background
    --------------------*/
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".header-section");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            var scroll = $(window).scrollTop();
            if (window.location.pathname == '/') {
                if(scroll >= 400){
                    $(".header-section").addClass("header-normal");   
                   }else{
                       $(".header-section").removeClass("header-normal");    
                   } 
            }

        });
    });


    /*------------------
       Headers
    --------------------*/
    $(function () {
        if (window.location.pathname !== '/') {
            $(".header-section").addClass("header-normal");
        }
    });



    /*------------------
        Hero Slider
    --------------------*/
    $(document).ready(function () {
        $('.hero-slider').owlCarousel({
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            autoplay: true
        });
    });


    /*------------------
        Intro Slider
    --------------------*/
    $(document).ready(function () {
        if ($('.intro-slider').length > 0) {
            var $scrollbar = $('.scrollbar');
            var $frame = $('.intro-slider');
            var options = {
                horizontal: 1,
                itemNav: 'forceCentered',
                activateMiddle: 1,
                smart: 1,
                activateOn: 'click',
                //mouseDragging: 1,
                touchDragging: 1,
                releaseSwing: 1,
                startAt: 10,
                scrollBar: $scrollbar,
                //scrollBy: 1,
                activatePageOn: 'click',
                speed: 200,
                moveBy: 600,
                elasticBounds: 1,
                dragHandle: 1,
                dynamicHandle: 1,
                clickBar: 1
            };
            $frame.sly(options);
        }
    });





    /*------------------
        ScrollBar
    --------------------*/
    // $(".cart-table, .product-thumbs").niceScroll({
    // 	cursorborder:"",
    // 	cursorcolor:"#afafaf",
    // 	boxzoom:false
    // });





    /*------------------
        Single Product
    --------------------*/
    $('.product-thumbs-track > .pt').on('click', function () {
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if (imgurl != bigImg) {
            $('.product-big-img').attr({ src: imgurl });
        }
    })

})(jQuery);
