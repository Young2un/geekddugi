$(function () {

    $(".benefit-menu li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        let tabName = $(this).attr("data-id");
        $(tabName).addClass("active").siblings().removeClass("active");


    })
})