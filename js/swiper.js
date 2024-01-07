document.addEventListener('DOMContentLoaded', function () {
    const bannerSwiper = new Swiper('.banner-swiper', {
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            
        },
    });
});