//module menu

var initMenu = function () {
    console.log('init menu');

    $('.tab-menu.first').on('click', function (e) {
        e.preventDefault();

        width = $('.cl').width();
        $('.tabs').addClass('up'); //animation

        if($('.cr').hasClass('visible')){
            $('.tab-menu.first .zmdi').addClass('zmdi-menu').removeClass('zmdi-close');

            $('.cr').removeClass('visible fadeInLeft').addClass('fadeOutRigth');
            $('.cr').css('left', '-160px');
            $('.main-container').css('left', 0 );
            $('body').removeClass('noscrollx');

            setTimeout(function(){
                $('.cr').addClass('hidden');
            }, 800);
        }else{

            $('.tab-menu.first .zmdi').removeClass('zmdi-menu').addClass('zmdi-close');

            $('.cr').removeClass('hidden').addClass('visible fadeInLeft');
            $('.cr').css('left',width);
            $('.main-container').css('left',width + 166);

            $('body').addClass('noscrollx');
        }

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


var initGraph = function() {
    var chart = new Chartist.Line('.ct-chart', {
        labels: ['Lun 10 oct', 'Mar 11 oct', 'Mer 12 oct', 'Jeu 13 oct', 'Ven 14 oct', 'Sam 15 oct'],
        // Naming the series with the series object array notation
        series: [{
            name: 'series-1',
            data: [1257, 1157, 1500, 1607, 1287, 1254, 1200, 1257]
        }, {
            name: 'series-2',
            data: [957, 1057, 1557, 1257, 1457, 1737, 1257, 1277]
        }]
    }, {
        // Within the series options you can use the series names
        // to specify configuration that will only be used for the
        // specific series.
        height: 350,
        series: {
            'series-1': {
                lineSmooth: Chartist.Interpolation.simple(),
                showArea: true,
                showPoint: true,
                axisX: {
                    // We can disable the grid for this axis
                    showGrid: false,
                    // and also don't show the label
                    showLabel: false
                },
                axisY: {
                    // We can disable the grid for this axis
                    showGrid: false,
                    // and also don't show the label
                    showLabel: false
                }
            },
            'series-2': {
                lineSmooth: Chartist.Interpolation.simple(),
                showArea: true,
                showPoint: true,
                axisX: {
                    // We can disable the grid for this axis
                    showGrid: false,
                    // and also don't show the label
                    showLabel: false
                },
                axisY: {
                    // We can disable the grid for this axis
                    showGrid: false,
                    // and also don't show the label
                    showLabel: false
                }
            }
        },
        plugins: [
            Chartist.plugins.ctPointLabels({
                textAnchor: 'middle',
                labelInterpolationFnc: function(value) {return value+"€"}
            })
        ]
    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
// Straight lines don't get a bounding box
// Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if(ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

// Create the gradient definition on created event (always after chart re-render)
    chart.on('created', function(ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'hsla(340, 64%, 50%, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'hsla(43, 100%, 64%, 1)'
        });
    });
}


$(document).ready(function(){

    console.log('ok');

    if($('.menu-left').length > 0 ) {
        initMenu();
    }

    initDonut();
    initGraph();
});