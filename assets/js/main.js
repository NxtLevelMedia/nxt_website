var wScroll = $(document).scrollTop();
var wHeight = $(window).height();

$(document).ready(function() {

    WhatAnimation('fadein');
    WhatAnimation('swingin');
    WhatAnimation('slidein');

    $("body").animate({'opacity': 1}, 1000);

    $(".landing-section").css({
        'background-position': 'center ' + (wScroll / 2) + 'px'
    });

    $(".welcome-text").css({
        'transform': 'translateY(' + (wScroll / 2.5) + 'px)'
    });

    $("#navicon").stop().click(function() {
        $(this).css('display', 'none');
        $("#closeicon").css('display', 'block');
        $("nav").addClass('open');
        $(".mobile-nav-overlay").addClass('open');
    });

    $("#closeicon").stop().click(function() {
        $(this).css('display', 'none');
        $("#navicon").css('display', 'block');
        $("nav").removeClass('open');
        $(".mobile-nav-overlay").removeClass('open');
    });


    $(window).on('scroll', function() {
        WhatAnimation('fadein');
        WhatAnimation('swingin');
        WhatAnimation('slidein');

        console.log(WhatAnimation('fadein'))

        wScroll = $(document).scrollTop();

        $(".landing-section").css({
            'background-position': 'center ' + (wScroll / 2) + 'px'
        });

        $(".welcome-text").css({
            'transform': 'translateY(' + (wScroll / 2.5) + 'px)'
        });
        
    });

    $(window).on('resize', function() {
        $("#closeicon").css('display', 'none');
        $("#navicon").css('display', 'block');
        $("nav").removeClass('open');
        $(".mobile-nav-overlay").removeClass('open');
    })

});

function WhatAnimation(name) {
    $('.' + name).each(function(){
        switch (name) {
            case 'fadein': AddClass(this, 'fade');
                break;

            case 'swingin': AddClass(this, 'swing');
                break;

            case 'slidein': AddClass(this, 'slide');
                break;
        }
    });
}

function AddClass(object, name) {
    if(IsVisible(object)){
        $(object).addClass(name);
    } else {
        $(object).removeClass(name);
    }
    return false;
}

function IsVisible(object) {
    var viewport = $(window).scrollTop() + $(window).height();
    var rand = $(object).offset();
    var offset = 200;

    rand.bottom = rand.top + $(object).outerHeight();

    return (!(viewport < (rand.top + offset) || $(window).scrollTop() > (rand.bottom - offset)));
}