$(function(){
    $(".param-card .swiper-box .swiper-wrapper").on('click', '.swiper-slide', function(){
        $('.modal-picture img').attr('src', $(this).find('img').attr('src'));
        $('.modal-picture').show();
    });

    $('.modal-picture').on('click', function(){
        $('.modal-picture').hide();
    });

    var mySwiper = new Swiper ('.swiper-container1', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,

        // 如果需要分页器
        pagination: '.swiper-pagination1',
        paginationType : 'bullets',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next1',
        prevButton: '.swiper-button-prev1',

    });
    var mySwiper1 = new Swiper ('.swiper-container2', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,

        // 如果需要分页器
        pagination: '.swiper-pagination2',
        paginationType : 'bullets',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',

    });

    var mySwiper2 = new Swiper ('.swiper-container3', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,

        // 如果需要分页器
        pagination: '.swiper-pagination3',
        paginationType : 'bullets',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next3',
        prevButton: '.swiper-button-prev3',

    });

    var mySwiper3 = new Swiper ('.swiper-container4', {
        direction: 'horizontal',
        loop: true,
        autoplay:5000,

        // 如果需要分页器
        pagination: '.swiper-pagination4',
        paginationType : 'bullets',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next4',
        prevButton: '.swiper-button-prev4',

    });
});
