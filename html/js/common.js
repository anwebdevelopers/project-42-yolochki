window.onload = function() {

    'use strict';
    var w = $(window).width();

    if ($('.header').length) {
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
            }
        }
        fullscreen();
        $(window).resize(function() {
            fullscreen();
        });

        //------------------------------------------------------
        //Home Slide
        //------------------------------------------------------

        var beginning_color = new $.Color( 'rgb(0,181,103)' );
        var ending_color = new $.Color( 'rgb(255,255,255)' );

        $(window).scroll(function() {

            var scroll_pos = $(this).scrollTop();
            var animation_begin_pos = $('.header').offset().top - $(window).height();
            var animation_end_pos = $('.header').offset().top + $('.header').height();

            if (scroll_pos > animation_begin_pos && scroll_pos < animation_end_pos) {

               var percentScrolled = scroll_pos * 5 / ( animation_end_pos - animation_begin_pos );

               var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
               var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
               var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );

               var oldRed = ending_color.red() + ( ( beginning_color.red() - ending_color.red() ) * percentScrolled );
               var oldGreen = ending_color.green() + ( ( beginning_color.green() - ending_color.green() ) * percentScrolled );
               var oldBlue = ending_color.blue() + ( ( beginning_color.blue() - ending_color.blue() ) * percentScrolled );

               var newColor = new $.Color( newRed, newGreen, newBlue );
               var oldColor = new $.Color( oldRed, oldGreen, oldBlue );

               $('.header').css({ backgroundColor: newColor });
               $('.header__title').css({ color: oldColor });
               $('.header__undertitle').css({ color: oldColor });
               $('.header__bg-img').css({ opacity: 1 - (percentScrolled * 1.5) });
            }
        });
    
    }

    //------------------------------------------------
    // Плавный скролл
    //------------------------------------------------

    $("a[href*='#']").click(function(e) {
        e.preventDefault();
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect }, ((Math.abs(thisSect - $(window).scrollTop()) * 0.1) * 5), 'swing');
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

    //---------------------------------------------
    //Ввод в поле формы для подписки
    //---------------------------------------------
    $('.subscription__item-field input').each(function() {
        var $this = $(this),
            count = $this.val(),
            price = $this.closest('.subscription__item').find('.subscription__item-price input').val();
        $this.closest('.subscription__item').find('.subscription__item-price-val').text(count * price);
    });

    $('.subscription__item').on('change', '.subscription__item-field input', function() {

        var $this = $(this),
            price = $(this).closest('.subscription__item').find('.subscription__item-price input').val();
        if ($this.val() < 1 || !Number($this.val())) {
            $this.val(1);
        }
        $this.closest('.subscription__item').find('.subscription__item-price-val').text($this.val() * price);
    });


    //------------------------------------------------------
    //wiget vk
    //------------------------------------------------------
    if ($('#vk_like').length) {
        VK.init({apiId: 5908395, onlyWidgets: true});
        VK.Widgets.Like("vk_like", {type: "mini", height: 20});
    }


    //------------------------------------------------------
    //wiget fb
    //------------------------------------------------------

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.8";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));


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
