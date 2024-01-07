document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        const bannerSwiper = new Swiper('.banner-swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            },
        });
        const productSwiper = new Swiper('.products-swiper', {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 6,
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
                1200: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 20,
                    grid: {
                        fill: 'row',
                        rows: 2,
                    },
                },
            }
        });
        const blogSwiper = new Swiper('.blogs-swiper', {
            slidesPerView: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 3,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
            }
        })
    })
});