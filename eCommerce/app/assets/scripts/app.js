//module menu

var initMore = function () {
    $('.btn-act').on('click', function () {
        var isMore = $(this).hasClass('more');
        var parent = $(this).parent();
        var number = $(parent).find('.number').html();
        var $number = $(parent).find('.number');
        number = parseInt(number);


        if (isMore) {
            var verif = number + 1;

            if(verif > 20){
                $number.html(20);
            }else{
                $number.html(verif);
            }
        } else {

            var verif = number - 1;
            if(verif < 0){
                $number.html(0);
            }else{
                $number.html(verif);
            }
        }
    })
}

var initMenuScroll = function() {
    $(window).on('scroll', function () {
        var $header = $('.head');
        var lastScrollTop = 0;
        var s = $(this).scrollTop();
        scrollTarget = s;

        var bock1 = $('.home-e-commerce').height() - 0;

        console.log('b '+bock1);
        console.log(s)
        // STICKY HEADER
        if (s > 50) {
            $('body').addClass('menu-sticky');
            $header.addClass('animated fadeInDown');
        } else {
            $('body').removeClass('menu-sticky');
            $header.removeClass('animated fadeInDown');
        }
    });
}

$(document).ready(function () {

    console.log('ok');

    if ($('.btn-act').length > 0) {
        initMore();
    }

    if($('.home').length > 0){
        initMenuScroll();
    }

    $('.arrow').on('click', function(){

        var position = $('.service')[0].offsetTop - 130;
        $('html, body').animate({
            scrollTop: position
        }, 'slow');
    });

});