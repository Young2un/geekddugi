$(function () {


    $(".list input[type=button]").click(function () {
        const $this = $(this);
        const $obj = $(this).siblings("input[type=text]");
        let $value = $obj.val();
        if ($this.val() === "-") {
            if ($value > 1) $obj.val(--$value);
        } else {
            if ($value < 10) $obj.val(++$value);
        }
        amountPrice_Func();
    });

    amountPrice_Func();
    // totalPay_Func();


    function amountPrice_Func() {
        // 리스트1번의 am-price 출력코드
        const $list_1 = $(".list1");
        const $price_1 = $list_1.find(".price").text().replace(/[^0-9]/g, "");
        const $val_1 = $list_1.find("input[type=text]").val();
        const $am_1 = parseInt($price_1) * parseInt($val_1);
        $list_1.find(".am-price").text($am_1.toLocaleString());
        // 1번 장바구니의 합계

        const $list_2 = $(".list2");
        const $price_2 = $list_2.find(".price").text().replace(/[^0-9]/g, "");
        const $val_2 = $list_2.find("input[type=text]").val();
        const $am_2 = parseInt($price_2) * parseInt($val_2);
        $list_2.find(".am-price").text($am_2.toLocaleString());

        totalPay_Func($am_1, $am_2);




        // $(".totalPrice-item").find(".amPrice-sum").text((parseInt($am_1)+ parseInt($am_2)).toLocaleString());
    }
    function totalPay_Func(a, b) {
        const $am_sum = a + b ;
        const $total = $(".totalPrice-item");
        const $delivery = $total.find(".deliveryPrice").text().replace(/[^0-9]/g, "");
        const $calc = $am_sum  + parseInt($delivery);

        $total.find(".amPrice-sum").text(  $am_sum.toLocaleString()  );
        $total.find(".totalPrice").text(  $calc.toLocaleString() );
    }





})