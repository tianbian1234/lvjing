$(document).ready(function () {
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
    var mySwiper1 = new Swiper('.swiper-container2',{
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        loop : true,
        autoplay:5000,
        coverflow: {
            rotate: 0,
            depth:30,
            modifier: 20,
            slideShadows : false
        },

        pagination : '.swiper-pagination2',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next2',
        prevButton: '.swiper-button-prev2',
//pagination : '#swiper-pagination1',
    });
});
