$(function () {
    $(".relative-Slider").slick({
        slide: 'li',
        allow: true,
        prevArrow: ".left",
        nextArrow: ".right",
        slidesToShow: 4,
        variableWidth: true,
        centerMode: true,
        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }]

    })

    $(".review-table .title").click(function () {
        $(this).parent().next().toggleClass("show").siblings().removeClass("show")
    })


})


