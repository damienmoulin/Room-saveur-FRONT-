//module menu

var initMenu = function () {
    console.log('init menu');

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $('.tabs').addClass('up'); //animation

        var id = $(this).data('id'); //recupere id de l'element cliqué

        $('.c-tabs .tab').removeClass('active');


        $('.c-tabs .tab').each(function (index, element) {

            var contentId = $(element).data('id');

            if(contentId == id) {
                $(element).addClass('active');
            }
        })

    })
}


var closeMenu = function () {

}


$(document).ready(function(){

    console.log('ok');

    if($('.m-menu').length > 0 ){
        initMenu();
    }

});