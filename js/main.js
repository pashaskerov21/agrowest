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
    })
});