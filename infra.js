var swiper = new Swiper(".slide-content", {
    // slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
    },
    // centerSlide: 'true',
    // fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: 'true',
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".slide-contenttt", {
    // slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed: 1000,

    autoplay: {
        delay: 2000,
    },
    // centerSlide: 'true',
    // fade: 'true',
    // grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: 'true',
    },
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    },
});