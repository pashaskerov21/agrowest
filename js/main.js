document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('header .menu__button').click( function() {
            $('.menu__wrapper').addClass('active');
            $('body').css('overflow', 'hidden');
        });
        $('.menu__wrapper .close__button').click( function() {
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

        $('.filter__toggle').click( function() {
            $('.product__filters').slideToggle();
        });

        $('.filter__collapse .fc__button').click( function() {
            $(this).parent('.filter__collapse').toggleClass('collapsed');
            $(this).parent('.filter__collapse').find('.fc__content').slideToggle();
        });

        $('.gallery__button').eq(0).addClass('active');
        $('.gallery__tab').eq(0).addClass('active');
        $('.gallery__button').click( function() {
            $('.gallery__button').removeClass('active');
            $(this).addClass('active');
            
            let id = $(this).data('id')
            $('.gallery__tab').removeClass('active');
            $(`.gallery__tab[data-id="${id}"]`).addClass('active')
        });
    });
});
