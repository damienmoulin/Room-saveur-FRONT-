//module menu

var initMenu = function () {
    console.log('init menu');

    $('.c-menu-left').on('mouseenter', function (e) {
        e.preventDefault();

        width = $('.cl').width();

        $('.tabs').addClass('up'); //animation

        $('.cr').removeClass('hidden').addClass('visible fadeInLeft');
        $('.cr').css('left',width);
        $('.main-container').css('padding-left',width + 136);

    })

    $('.c-menu-left').on('mouseleave', function (e) {
        e.preventDefault();

        console.log('ici');
        width = $('.cl').width();

        $('.tabs').addClass('up'); //animation

        $('.cr').removeClass('visible fadeInLeft').addClass('fadeOutRigth');
        $('.cr').css('left', '-160px');
        $('.main-container').css('padding-left', 0 );

        setTimeout(function(){
            $('.cr').addClass('hidden');
        }, 500);

    })
}


var closeMenu = function () {

}


$(document).ready(function(){

    console.log('ok');

    if($('.menu-left').length > 0 ){
        initMenu();
    }

});