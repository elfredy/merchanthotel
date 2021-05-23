$(document).ready(function () {

    $('.homeRoom__carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 3,


            }
        }
    })
    $('.homeGuest__slider').owlCarousel({
        loop: true,
        margin: 24,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 3,


            }
        }
    })
    $('.instagram__slider').owlCarousel({
        loop: true,
        margin: 26,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 3,


            }
        }
    })
    $('.diningTerrace__slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: true,
        items: 1
    })
    $('.diningRest__slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: true,
        items: 1
    })
    $('.hotelPage__slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: true,
        items: 1
    })


    $('.footer__slider ').owlCarousel({
        loop: true,
        margin: 57,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3,

            },
            600: {
                items: 5,

            },
            1000: {
                items: 8,



            },
            1300: {
                items: 12,


            }
        }
    })


})