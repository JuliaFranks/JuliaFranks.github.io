(function ($) {

    "use strict";

    // preloader
    jQuery(window).load(function () {
        setTimeout(function(){
            jQuery('.preloader').fadeOut('slow', function () {
            });
        }, 500);
    });

    jQuery(document).ready(function( $ ) {

        var sidebar_s = $(".c-sidebar-1.sidebar-sticky");
        var stckyoffset = $(".c-sidebar-1.sidebar-sticky").attr('data-stcky-offset');
        var stckyanimate = $(".c-sidebar-1.sidebar-sticky").attr('data-stcky-animate');
        var stckyanimate = (stckyanimate == 'false') ? false : true;
        var stckyanimatetime = $(".c-sidebar-1.sidebar-sticky").attr('data-stcky-animate-time');

        if(sidebar_s.size() > 0){
            sidebar_s.sticky('#widget-area', {
                useTransition: false,
                animate: stckyanimate,
                animTime: parseInt(stckyanimatetime),
                offset: parseInt(stckyoffset),
            });
        }

        // blog list
        jQuery('.flexslider').flexslider({controlNav:true});
        jQuery(".video-responsive").fitVids();
        jQuery(".single-inner-content table, .cryptoland-post-class table, .widget_calendar table" ).addClass( "table table-striped" );

    });

})(jQuery);
