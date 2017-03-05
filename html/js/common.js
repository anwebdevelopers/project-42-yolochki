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
        var count = $(this).val(),
            price = $(this).closest('.subscription__item').find('.subscription__item-price input[type="hidden"]').val();
        $(this).closest('.subscription__item').find('.subscription__item-price-val').text(count * price);
    });

    $('.subscription__item').on('change', '.subscription__item-field input', function() {

        var $this = $(this),
            price = $(this).closest('.subscription__item').find('.subscription__item-price input').val();
        if ($this.val() < 1 || !Number($this.val())) {
            $this.val(1);
        }
        $(this).closest('.subscription__item').find('.subscription__item-price-val').text($(this).val() * price);
    });


    //------------------------------------------------------
    //wiget vk
    //------------------------------------------------------

    VK.init({apiId: 5908395, onlyWidgets: true});
    VK.Widgets.Like("vk_like", {type: "mini", height: 20});

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
