window.onload = function() {

    'use strict';
    var w = $(window).width();


    //------------------------------------------------------------
    //fullscreen header
    //------------------------------------------------------------
    var $header = $('.header');
    function fullscreen() {
        $header.removeAttr('style');
        var windowHeight = $(window).height(),
            headerHeight = $header.height();
        if (windowHeight > $header.height()) {
            $header.css({
                'height' : windowHeight + 'px'
            });
            console.log('a');
        }
    }
    fullscreen();
    $(window).resize(function() {
        fullscreen();
    });


    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $("a[href*='#']").click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) * 5), 'linear');
    });


    //---------------------------------------------
    //about item hover фикс для сафари мобайл
    //---------------------------------------------
    $('.about__item_with_inner').hover(
        function() {
            $(this).addClass('active')
        },
        function() {
            $(this).removeClass('active')
        }
    );


    //---------------------------------------------
    //Видеопопап
    //---------------------------------------------
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });


    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });
};
