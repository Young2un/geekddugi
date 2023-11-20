$(function () {



    $(window).scroll(function () {
        const st = $(this).scrollTop();

        $(".pos").text(Math.floor(st));

        if(st > ($(".intro").offset().top)- 80){
            $(".top").css({
                position:"fixed",
                top:"80px",
            })
        }else {
            $(".top").css({
                position: "",
                top:"",
            })
        }

    });

    $(".benefit-slider").slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }]
    })

    $(".oKitchen-slider").slick({
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        fade: true,
    })

    $(".MD-slide").slick({
        slide: 'li',
        arrows: false,
        swipe: false,
    })


    $(".rank-left").slick({
        slide: 'li',
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        swipe: false, // 스와이프
        // autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover:false, // 마우스 오버시 자동재생 멈춤
    })

    $(".rank-right").slick({
        slide: 'li',
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3, // 보여질 슬라이드 갯수
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        asNavFor: '.rank-left',
        pauseOnHover:false, // 마우스 오버시 자동재생 멈춤
        infinite: true,
        focusOnSelect: true,
    });



    $(".sns-slider").slick({
        arrows: true,
        prevArrow: $('.left'),
        nextArrow: $('.right'),
        variableWidth: true,
        centerMode: true,
    })


});