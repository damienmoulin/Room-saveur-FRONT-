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


var initDonut = function() {
    /**
     * Built with the jQuery plugin that was born as a result of the great dribble shot
     * http://rendro.github.io/easy-pie-chart/
     **/

    function color(percent) {
        var color = '#F44336';

        if (percent > 50) {
            color = '#8bc34a'; //green
        } else {
            color = '#F44336'; //red
        }
        return color;
    }

    $('.percentage').easyPieChart({
        animate: 1000,
        lineWidth: 15,
        scaleColor: false,
        size: 124,
        barColor: color
    });
}


$(document).ready(function(){

    console.log('ok');

    if($('.menu-left').length > 0 ) {
        initMenu();
    }

    initDonut()
});