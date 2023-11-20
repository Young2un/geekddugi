$(function () {


    $(".PcFood-o-slider").on("init",function () {
        $(".PcFood-o-slider div.slick-active").css({
            opacity:"1",
        })

    }).on("afterChange",function () {
        $(".PcFood-o-slider div.slick-active").css({
            opacity:"1",
            transition:".3s",
        })
    })

    $(".main-slider").on("init", function () {
        $(".main-item.slick-center").css({
            transform: "scale(1)",
        })
    }).on("afterChange", function () {
        $(".main-item.slick-center").css({
            animation: "slide_scale 0.3s both",
        })
    }).on("beforeChange", function () {
        $(".main-item.slick-center").css({
            animation: "slide_scale2 0.5s both",
        })
    })


    $(".main-slider").slick({
        allow:true,
        prevArrow:".main-btn-left",
        nextArrow:".main-btn-right",
        slidesToShow: 1, // 보여질 슬라이드 갯수
        slidesToScroll: 1, // 넘겨질 슬라이드 갯수
        variableWidth: true,
        centerMode: true, // 중앙모드
        centerPadding: '0', // 중앙모드 시 여백
        infinite:true,
        initialSlide: 0,
        speed:300,
    })


    $(".main-slider-m").slick({
        dots: true,
        arrows:true,
        prevArrow :".main-btn-left-m",
        nextArrow:".main-btn-right-m",

    })





    $(".PcFood-o-slider").slick({
        slidesToScroll: 1, // 넘겨질 슬라이드 갯수
        slidesToShow: 3,
        variableWidth: true,
        // arrows: false,
        nextArrow: ".right",
        prevArrow: false,
    infinite: true,
        // speed:300,

        responsive: [ // 반응형 적용여부
            {
                breakpoint: 768, //해상도 브레이크 포인트 설정
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                    infinite: true,
                    dots: false,
                    variableWidth: true,

                }
            }]




    })



})