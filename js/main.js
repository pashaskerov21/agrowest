document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('header .menu__button').click(function () {
            $('.menu__wrapper').addClass('active');
            $('body').css('overflow', 'hidden');
        });
        $('.menu__wrapper .close__button').click(function () {
            $('.menu__wrapper').removeClass('active');
            $('body').css('overflow', 'visible');
        });
        window.addEventListener('scroll', function () {
            if (this.scrollY > 300) {
                $('.general__navbar').addClass('fixed');
            } else {
                $('.general__navbar').removeClass('fixed');
            }
        });
    });
});