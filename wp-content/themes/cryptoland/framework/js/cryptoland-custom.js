
responsiveEl();
function responsiveEl() {

    "use strict";

    var matches = document.querySelectorAll("[data-res-css]");
    var resdata = [];
    matches.forEach(function(element) {
        var get_style = element.getAttribute("data-res-css");
        resdata.push(get_style);

        element.removeAttribute("data-res-css");
    });

    var css = resdata.join(""),
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    style.type = 'text/css';
    style.setAttribute("data-type", "cryptoland-shortcodes-custom-css");
    if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}


(function ($) {

    "use strict";

    function setBacktop_1() {
        var backtop_1 = $( ".c-backtop-1" );
        if ( backtop_1.length ) {
            if ( backtop_1.hasClass( "-js-backtop" ) ) {
                backtop_1.on( "click", function() {
                    $( "body, html" ).animate( { scrollTop: 0 }, 800 );
                });

                $( window ).on( "scroll", function() {
                    if ( $( window ).scrollTop() > 40 ) {
                        backtop_1.fadeIn();
                    } else {
                        backtop_1.fadeOut();
                    }
                });
            }
        }
    }

    function hasOverlay() {
        // data-overlay
        $(".has_overlay").hover(function(){
            var customhvroverlay = $(this).attr('data-hvr-overlay');
            if(customhvroverlay){
                $(this).css("background-color", customhvroverlay);
            }else{
                $(this).css("background-color", 'transparent');
            }
        }, function(){
            var customhvroverlay = $(this).attr('data-hvr-overlay');
            if(customhvroverlay){
                $(this).css("background-color", 'transparent');
            }else{
                $(this).css("background-color", 'transparent');
            }
        });
    }

    function hasTrasform() {
        // data-trasform
        $(".has_transform").hover(function(){
            var customhvrtrasform = $(this).attr('data-hvr-scale');
            if(customhvrtrasform){
                $(this).find('img').css({
                    '-webkit-transform' : 'scale('+customhvrtrasform+')',
                    '-ms-transform' : 'scale('+customhvrtrasform+')',
                    'transform' : 'scale('+customhvrtrasform+')'
                });
            }
        }, function(){
            var customhvrtrasform = $(this).attr('data-hvr-scale');
            if(customhvrtrasform){
                $(this).find('img').css({
                    '-webkit-transform' : 'scale(1)',
                    '-ms-transform' : 'scale(1)',
                    'transform' : 'scale(1)'
                });
            }
        });
    }

    function hasOpacity() {
        // data-opacity
        var customopac = $(".has_opacity").attr('data-opacity');
        $(".has_opacity").css("opacity", customopac);
        $(".has_opacity").hover(function(){
            var customopacity = $(this).attr('data-opacity'),
            customhvropacity  = $(this).attr('data-hvr-opacity');
            if(customopacity && customhvropacity){
                $(this).css("opacity", customhvropacity);
            }
        }, function(){
            var customopacity = $(this).attr('data-opacity'),
            customhvropacity  = $(this).attr('data-hvr-opacity');
            if(customopacity && customhvropacity){
                $(this).css("opacity", customopacity);
            }
        });
    }

    function btnHover() {
        $('.custom-clr').hover(function(){
            var clr	= $(this).attr('data-clr') ? $(this).attr('data-clr') : $(this).css('color'),
            bg		= $(this).attr('data-bg') ? $(this).attr('data-bg'):$(this).css('background-color'),
            hvrclr	= $(this).attr('data-hvrclr') ,
            hvrbg	= $(this).attr('data-hvrbg');

            $(this).css("color", hvrclr);
            $(this).css("background", hvrbg);
            $(this).attr('data-hvrclr', clr);
            $(this).attr('data-hvrbg', bg);


        }, function(){
            var hvrclr	= $(this).css('color'),
            hvrbg	= $(this).css('background-color'),
            clr		= $(this).attr('data-hvrclr'),
            bg		= $(this).attr('data-hvrbg');

            $(this).css("color", clr);
            $(this).css("background", bg);
            $(this).attr('data-hvrclr', hvrclr);
            $(this).attr('data-hvrbg', hvrbg);
        });
    }

    $( document ).ready( function() {
        setBacktop_1();
        hasOverlay();
        hasTrasform();
        hasOpacity();
        btnHover();

        $('.vc_row').each(function(e){
            var count = $(this).find('.wpb_column').size();
            $(this).find('.wpb_column').each(function(i){
                var index = i - count;
                $(this).css('z-index', - index);
            });
        });

        var parallaxbg= $('[data-jarallax]');
        if (parallaxbg > 0) {
            $('.jarallax-cryptoland').jarallax();

            jarallax(document.querySelectorAll('.mobile-parallax-off'), {
                disableParallax: function () {
                    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
                },
                disableVideo: function () {
                    return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
                }
            });
        }
        // CF7 remove error message after 4 seconds
        $('.wpcf7-response-output').ajaxComplete(function(){
            window.setTimeout(function(){
                $('.wpcf7-response-output').addClass('display-none');
            }, 4000); //<-- Delay in milliseconds
        });
        
    });

})(jQuery);
