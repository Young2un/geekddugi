$(function () {





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
        initialSlide: 2,
        speed:300,
    })

    $(".main-slider-m").slick({
        dots: true,
        arrows:true,
        prevArrow :".main-btn-left-m",
        nextArrow:".main-btn-right-m",



    })



    $(".store-slider li .store-address").eq(0).show();
    $(".store-slider li").click(function () {
        $(this).children(".store-name").addClass("active");
        $(this).siblings().children(".store-name").removeClass("active");

        $(this).children(".store-address").stop().slideDown();
        $(this).siblings().children(".store-address").slideUp();
    })


    $(".store-slider").slick({
        arrows: false,
        slidesToShow: 5,
        vertical:true,
        verticalSwiping: false,
        focusOnSelect: true,
        asNavFor: '.map-slider',
    })

    $(".map-slider").slick({
        arrows: false,
        fade:true,
    })












})