// СЛАЙДЕР
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 351,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
});

// var btn = document.querySelector('.open-btn');
// btn.addEventListener('click', function() {
//     document.querySelector('.popup').classList.toggle('open');
// })

// var close = document.querySelector('.close');
// close.addEventListener('click', function() {
//     document.querySelector('.popup').classList.remove('open');
// })

$('.summer__play-block').click(function() {
    $('.popup').toggleClass('open-popup')
})
$('.close').click(function() {
    $('.popup').removeClass('open-popup')
})

    $ ('.burger').click(function() {
        $ ('.header__content .header__nav').toggleClass('open-menu')
    })

    $ ('.burger').click(function() {
        $ ('.burger').toggleClass('burger-active')
    })