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


$(document).ready(function () {

    console.log('ok');

    if ($('.btn-act').length > 0) {
        initMore();
    }

});