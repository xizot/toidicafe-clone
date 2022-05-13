const texts = [
    "Đi & khám phá điểm hẹn hấp dẫn",
    "Tìm góc cafe - thỏa sức sống ảo",
];

let index = 0;
let currentText = "";
let letter = "";
let count = 0;

const typing = function () {
    if (count == texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter + "|";

    if (letter.length == currentText.length) {
        count++;
        index = 0;
    }

    const timeout = setTimeout(typing, 200);
};

typing();
$(document).ready(function () {
    $(".purpose__slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $(".purpose__slider__prev"),
        nextArrow: $(".purpose__slider__next"),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    $(".near-me__slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2700,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $(".near-me__slider__prev"),
        nextArrow: $(".near-me__slider__next"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
