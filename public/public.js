$(function(){
    if(localStorage.auth) {
      $('.nav-container .list-right .login').hide();
      $('.nav-container .list-right .console').show();
    }else{
      $('.nav-container .list-right .login').show();
      $('.nav-container .list-right .console').hide();
    }
    $(window).resize(function(){
        let widthNow = $(document).width();
        if(widthNow > 960) {
            $('.list-right').show();
            $('.list-center').show();
        }else{
            $('.list-right').hide();
            $('.list-center').hide();
        }
    });

    $('.menu-small').on('click', function(){
        $('.list-right').toggle();
        $('.list-center').toggle();
    });
});
