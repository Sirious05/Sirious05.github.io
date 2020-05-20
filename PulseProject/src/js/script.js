// Carousel
$(document).ready(function($){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg"></button>',
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    afterChange: false,                
                }
            },
        ]
    }); 
    // Tabs
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(object) {
        $(object).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    // Validate
    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    validateForms('#call-form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
    

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } 
        if ($(this).scrollTop() < 1600) {
            $('.page-up').fadeOut();
        } 
        if ($(window).width() <= '995') {
            $('.page-up').remove();
        }
    });

    $("a[href^='#up']").click(function () {
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top + "px" });
        return false;
    });

});










