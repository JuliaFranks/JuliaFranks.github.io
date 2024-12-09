
jQuery(function($) {

    "use strict";

    var $ = jQuery;
    var rtl = $("body").hasClass('rtl') ? true : false;
    // preloader
    setTimeout(function(){
        $('.preloader-default').fadeOut();
    }, 500);

    // show first screen animation
    setTimeout(function(){
        $('.promo').addClass('active');
    }, 600);

    // menu toggle btn
    $('.btn-menu')	.on("click", function(){
        $('.fixed-menu').addClass('open');
    });

    $('.btn-close')	.on("click", function(){
        $('.fixed-menu').removeClass('open');
    });

    /*====================================================*/
    /*	ANIMATED SCROLL TO ANCHOR
    /*====================================================*/

    // custom select
    $('.select').each(function(){

        var $this = $(this), numberOfOptions = $(this).children('option').length, onmobileoff = $this.hasClass('mob-off');
        var onmobile_off = ( onmobileoff == true ) ? ' mob-off' : '';

        $this.addClass('select-hidden');
        $this.wrap('<div class="select'+onmobile_off+'"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<a />', {
                text: $this.children('option').eq(i).text(),
                href: $this.children('option').eq(i).val()
            }).appendTo($list).wrap('<li />');
        }

        var $listItems = $list.children('li');

        $styledSelect.on("click", function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').fadeToggle();
        });

        $listItems.on( "click",function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('href'));
            $list.fadeOut();
            //console.log($this.val());
        });

        $(document)	.on("click", function() {
            $styledSelect.removeClass('active');
            $list.fadeOut();
        });

    });

    // check inputs
    $(".form__input").focus(function(){
        $(this).addClass("in");
    });

    $(".form__input").focusout(function(){
        if($.trim($(this).val()) == ''){
            $(this).removeClass('in')
        }
    });

    // press  carousel
    var pressloop= $(".press-carousel").attr('data-loop') == 'yes' ? true : false;
    var pressautoplay= $(".press-carousel").attr('data-autoplay') == 'yes' ? true : false;
    var showitems= $(".press-carousel").attr('data-show-items') != '' ? $(".press-carousel").attr('data-show-items')  : 2;
    var pressdotclr= $(".press-carousel").is('[data-dotclr]') ? $(".press-carousel").attr('data-dotclr') : '';
    var pressactivedotclr= $(".press-carousel").is('[data-active-dotclr]') ? $(".press-carousel").attr('data-active-dotclr') : '';
    $(".press-carousel").owlCarousel({
        items: 2,
        margin: 30,
        rtl: rtl,
        loop: pressloop,
        autoplay: pressautoplay,
        dots: true,
        dotClass: 'owl-dot '+pressdotclr+' '+pressactivedotclr,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            }
        },
        onInitialized:pressDotClr
    });
    function pressDotClr(event) {
        if(pressdotclr){
            $(".press-carousel .owl-dots .owl-dot").css('background-color', pressdotclr);
        }else{
            return false;
        }
    }

    // press  carousel2
    var pressloop2= $(".press-carousel2").attr('data-loop') == 'yes' ? true : false;
    var pressautoplay2= $(".press-carousel2").attr('data-autoplay') == 'yes' ? true : false;
    var pressdotclr2= $(".press-carousel2").is('[data-dotclr]') ? $(".press-carousel2").attr('data-dotclr') : '';
    var pressactivedotclr2= $(".press-carousel2").is('[data-active-dotclr]') ? $(".press-carousel2").attr('data-active-dotclr') : '';
    $(".press-carousel2").owlCarousel({
        items: 1,
        rtl: rtl,
        loop: pressloop2,
        autoplay: pressautoplay2,
        dots: true,
        dotClass: 'owl-dot '+pressdotclr2+' '+pressactivedotclr2,
        onInitialized:pressDotClr2
    });
    function pressDotClr2(event) {
        if(pressdotclr2){
            $(".press-carousel2 .owl-dots .owl-dot").css('background-color', pressdotclr2);
        }else{
            return false;
        }
    }

    // news carousel
    var newsloop= $(".news-carousel").attr('data-loop') == 'yes' ? true : false;
    var newsautoplay= $(".news-carousel").attr('data-autoplay') == 'yes' ? true : false;
    var newsdotclr= $(".news-carousel").is('[data-dotclr]') ? $(".news-carousel").attr('data-dotclr') : '';
    var newsactivedotclr= $(".news-carousel").is('[data-active-dotclr]') ? $(".news-carousel").attr('data-active-dotclr') : '';
    var showitems_md = $(".news-carousel").attr('data-show-itemsmd');
    var showitemsmd = showitems_md ? parseInt(showitems_md) : 3;
    var showitems= 3;
    var newsperpage= $(".news-carousel").attr('data-post-per-page');
    var newslooped= (newsperpage != 'all') && (parseInt(newsperpage)< showitems) ? true : newsloop ;
    $(".news-carousel").owlCarousel({
        items: showitems,
        rtl: rtl,
        margin: 30,
        loop: newslooped,
        autoplay: newsautoplay,
        dots: true,
        dotClass: 'owl-dot '+newsdotclr+' '+newsactivedotclr,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: showitemsmd,
            },
        },
        onInitialized:newsDotClr
    });
    function newsDotClr(event) {
        if(newsdotclr){
            $(".press-carousel2 .owl-dots .owl-dot").css('background-color', newsdotclr);
        }else{
            return false;
        }
    }

    // timer
    var get_Date1 = $(".timer1").attr('data-date');
    var countDownDate1 = new Date(get_Date1).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now1 = new Date().getTime();

        // Find the distance between now an the count down date
        var distance1 = countDownDate1 - now1;

        // Time calculations for days, hours, minutes and seconds
        var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
        var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
        var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        var timer1 = $(".timer1").size();
        if(timer1 > 0){
            document.getElementById("timer1").innerHTML = "<div class='timer__item'><div class='timer__value'>" + days1 + "</div><div class='timer__item-title'>Days</div></div> <div class='timer__item'><div class='timer__value'>" + hours1 + "</div><div class='timer__item-title'>Hours</div></div> <div class='timer__item'><div class='timer__value'>"
            + minutes1 + "</div><div class='timer__item-title'>Minutes</div></div> <div class='timer__item'><div class='timer__value'>" + seconds1 + "</div><div class='timer__item-title'>Seconds</div></div> ";

            // If the count down is finished, write some text
            if (distance1 < 0) {
                clearInterval(x);
                document.getElementById("timer1").innerHTML = "EXPIRED";
            }
        }
    }, 1000);

    // timer
    var get_Date = $(".timer11").attr('data-date');
    var countDownDate = new Date(get_Date).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="timer"
        var timer = $(".timer11").size();
        if(timer > 0){
            document.getElementById("timer11").innerHTML = "<div class='timer__item'><div class='timer__value'>" + days + "</div><div class='timer__item-title'>Days</div></div> <div class='timer__item'><div class='timer__value'>" + hours + "</div><div class='timer__item-title'>Hours</div></div> <div class='timer__item'><div class='timer__value'>"
            + minutes + "</div><div class='timer__item-title'>Minutes</div></div> <div class='timer__item'><div class='timer__value'>" + seconds + "</div><div class='timer__item-title'>Seconds</div></div> ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer11").innerHTML = "EXPIRED";
            }
        }
    }, 1000);

    // FlipClock
    // first argument year, month, date
    // arg month start from 0    2018, 11, 5, 0, 0, 0, 0
    var get_date2 = $(".timer2").attr('data-date');
    var get_get_Date2 ;
    if(get_date2){
        var get_Date2 = get_date2.split(',').map(x => parseInt(x, 10));
        //var flipdatee = parseInt(2018, 11, 5, 0, 0, 0, 0);
        var flipdate2 = new Date(get_Date2[0],get_Date2[1],get_Date2[2],get_Date2[3],get_Date2[4],get_Date2[5],get_Date2[6]);
        var flipnow2 = new Date();
        var flipdiff2 = (flipdate2.getTime()/1000) - (flipnow2.getTime()/1000);

        var clock = $('.timer2').FlipClock(flipdiff2,{
            clockFace: 'DailyCounter',
            countdown: true,
            //language:'spanish',
        });
    }

    // FlipClock
    // first argument year, month, date
    // arg month start from 0    2018, 11, 5, 0, 0, 0, 0
    var get_date3 = $(".timer3").attr('data-date');
    if(get_date3){
        var get_Date3 = get_date3.split(',').map(x => parseInt(x, 10));
        //var flipdatee = parseInt(2018, 11, 5, 0, 0, 0, 0);
        console.log(get_Date3[0]);
        var flipdate3 = new Date(get_Date3[0],get_Date3[1],get_Date3[2],get_Date3[3],get_Date3[4],get_Date3[5],get_Date3[6]);
        var flipnow3 = new Date();
        var flipdiff3 = (flipdate3.getTime()/1000) - (flipnow3.getTime()/1000);

        var clock = $('.timer3').FlipClock(flipdiff3,{
            clockFace: 'DailyCounter',
            countdown: true,
            //language:'spanish',
        });
    }

    // charts
    var chartdef = $("#myChart").length;
    if(chartdef > 0){
        var chart_count = $(".chart__legend li").size(),
        lbl = [],
        clr = [],
        val = [];
        for (var i = 1; i < chart_count+1; i++) {
            var get_label = $(".chart__legend li:nth-child("+i+")").attr('data-chart-label');
            var get_color = $(".chart__legend li:nth-child("+i+")").attr('data-chart-color');
            var get_value = $(".chart__legend li:nth-child("+i+")").attr('data-chart-value');
            lbl.push(get_label);
            clr.push(get_color);
            val.push(get_value);
        }
        //console.log(lbl);
        var get_cutout = $(".chart__wrap").attr('data-chart-cutout');
        var get_cutout = (typeof get_cutout !== typeof undefined && get_cutout !== false) ? parseInt(get_cutout): '';
        var get_brd =  $(".chart__wrap").attr('data-chart-brd');
        var get_brd = (typeof get_brd !== typeof undefined && get_brd !== false ) ? parseInt(get_brd) : 0;
        var get_brdclr = $(".chart__wrap").attr('data-chart-brdclr');
        var get_brdclr = (typeof get_brdclr !== typeof undefined && get_brdclr !== false) ? ''+get_brdclr+'' : 'transparent';

        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: lbl,
                datasets: [{
                    label: '# of Votes',
                    data: val,
                    backgroundColor:clr,
                    borderWidth:parseInt(get_brd),
                    borderColor:get_brdclr
                }]
            },
            options: {
                legend: {
                    display: false
                },
                cutoutPercentage:get_cutout,
            }
        });
    }

    // counter up values
    $('.counter').countUp({
        'time': 2000,
        'delay': 10
    });

    // youtube
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // same height
    $('.new__title').matchHeight();
    $('.same_height').matchHeight();
    $('.press__item.home4').matchHeight();

    // animation
    AOS.init({
        disable: 'mobile',
        duration: 1000,
        once: true
    });

    // SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {

        // Selectors
        ignore: '[data-vc-accordion], .switcher a', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
        topOnEmptyHash: true, // Scroll to the top of the page for links with href="#"

        // Speed & Easing
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        clip: true, // If true, adjust scroll distance to prevent abrupt stops near the bottom of the page

        easing: 'easeInOutCubic', // Easing pattern to use
        offset:110,
        customEasing: function (time) {

            // Function. Custom easing pattern
            return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

        },
        offset: function (anchor) {
            $('.fixed-menu').removeClass('open');
            // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
            // This example is a function, but you could do something as simple as `offset: 25`

            // An example returning different values based on whether the clicked link was in the header nav or not
            if ($('.mob-menu__link').closest('.fixed-menu')) {
                $('.fixed-menu').removeClass('open');
                return 120;
            } else {
                return 120;
            }

        },
        // History
        updateURL: true, // Update the URL on scroll
        popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)

        // Custom Events
        emitEvents: true // Emit custom events

    });

    // scroll down
    $('.scroll-down').on('click', function(e) {
        $('html, body').animate({
            scrollTop: getHeight()
        }, 1000);
    });

    // canvas
    var canvaslength = $('canvas.scene--full').size();
    if(canvaslength > 0){
        var canvas = document.querySelector('.scene--full');
        var width = canvas.offsetWidth,
        height = canvas.offsetHeight;

        var renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000,0);

        var scene = new THREE.Scene();

        // var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
        var camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 1000);


        camera.position.set(0, 0, 350);

        var sphere = new THREE.Group();
        scene.add(sphere);
        var material = new THREE.LineBasicMaterial({
            // color: 0xfe0e55

            color: 0x19395e
        });
        var linesAmount = 25;
        var radius = 100;
        var verticesAmount = 50;
        for(var j=0;j<linesAmount;j++){
            var index = j;
            var geometry = new THREE.Geometry();
            geometry.y = (index/linesAmount) * radius*2;
            for(var i=0;i<=verticesAmount;i++) {
                var vector = new THREE.Vector3();
                vector.x = Math.cos(i/verticesAmount * Math.PI*2);
                vector.z = Math.sin(i/verticesAmount * Math.PI*2);
                vector._o = vector.clone();
                geometry.vertices.push(vector);
            }
            var line = new THREE.Line(geometry, material);
            sphere.add(line);
        }

        function updateVertices (a) {
            for(var j=0;j<sphere.children.length;j++){
                var line = sphere.children[j];
                line.geometry.y += 0.3;
                if(line.geometry.y > radius*2) {
                    line.geometry.y = 0;
                }
                var radiusHeight = Math.sqrt(line.geometry.y * (2*radius-line.geometry.y));
                for(var i=0;i<=verticesAmount;i++) {
                    var vector = line.geometry.vertices[i];
                    var ratio = noise.simplex3(vector.x*0.009, vector.z*0.009 + a*0.0006, line.geometry.y*0.009) * 15;
                    vector.copy(vector._o);
                    vector.multiplyScalar(radiusHeight + ratio);
                    vector.y = line.geometry.y - radius;
                }
                line.geometry.verticesNeedUpdate = true;
            }
        }

        function render(a) {
            requestAnimationFrame(render);
            updateVertices(a);
            renderer.render(scene, camera);
        }

        function onResize() {
            canvas.style.width = '';
            canvas.style.height = '';
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        var mouse = new THREE.Vector2(0.8, 0.5);
        function onMouseMove(e) {
            mouse.y = e.clientY / window.innerHeight;
            TweenMax.to(sphere.rotation, 2, {
                x : (mouse.y * 1),
                ease:Power1.easeOut
            });
        }

        requestAnimationFrame(render);
        window.addEventListener("mousemove", onMouseMove);
        var resizeTm;
        window.addEventListener("resize", function(){
            resizeTm = clearTimeout(resizeTm);
            resizeTm = setTimeout(onResize, 200);
        });
    }

    // mobile menu dropdown
    var jMobileMenu = $('.mob-menu'),
    jLink = jMobileMenu.find('.item-has-children .mob-menu__link');

    jLink.on('click', function (e) {
        e.preventDefault();

        var $this = $(this);

        $this.siblings('ul').slideToggle();
        $this.toggleClass( "d-open" );
    });

    // time circles
    $(window).resize(function(){
        $(".js-TimeCircles").TimeCircles().rebuild();
    });


});

// sticky header
var $window = jQuery(window);

function getHeight(){
    return jQuery('.promo').outerHeight();
}

$window.on('scroll', function () {
    if ($window.scrollTop() > 1) {
        jQuery('body').addClass('scroll-start');
        jQuery('.header:not(.sticky-off)').addClass('sticky');
        jQuery('.fixed-menu').addClass('sticky');
    } else {
        jQuery('body').removeClass('scroll-start');
        jQuery('.header:not(.sticky-off)').removeClass('sticky');
        jQuery('.fixed-menu').removeClass('sticky');
    }
});
$window.on('load', function () {
    jQuery('body').addClass('page-loaded');
    var counter = 0;
    var count = 0;
    var i = setInterval(function() {
      jQuery(".bg-text").css('width',(count*1.75)+'%');
      counter++;
      count++;
      if ( counter > 101 ) {
        clearInterval(i);
        jQuery('#preloader').addClass("isdone");
      }
    });
});


(function(){
    var oInterval = setInterval(function (){
        if (typeof window.jQuery !== 'undefined'){

            clearInterval(oInterval);

            jQuery(document).ready(function($){

                "use strict";

                // TimeCircles
                var ctimer = $(".js-TimeCircles").size();
                var get_ctimer = $(".js-TimeCircles").attr('data-label');
                var get_ctimerclr = $(".js-TimeCircles").attr('data-progresclr');
                var get_circlebg = $(".js-TimeCircles").attr('data-circlebg');

                if(ctimer > 0){

                    var get_ctimerr = new Array();
                    get_ctimerr = get_ctimer.split(",");
                    var get_ctimerclrr = new Array();
                    get_ctimerclrr = get_ctimerclr.split(",");

                    jQuery('.js-TimeCircles').TimeCircles({
                        "animation": "smooth",
                        "bg_width": 1.1,
                        "fg_width": 0.05,
                        "circle_bg_color": get_circlebg,
                        "number_size": 0.2,
                        "time": {
                            "Days": {
                                "text": get_ctimerr[0],
                                "color": get_ctimerclrr[0],
                                "show": true
                            },
                            "Hours": {
                                "text": get_ctimerr[1],
                                "color": get_ctimerclrr[1],
                                "show": true
                            },
                            "Minutes": {
                                "text": get_ctimerr[2],
                                "color": get_ctimerclrr[2],
                                "show": true
                            },
                            "Seconds": {
                                "text": get_ctimerr[3],
                                "color": get_ctimerclrr[3],
                                "show": true
                            }
                        }
                    });
                }

            });

        }
    }, 500);
})();
