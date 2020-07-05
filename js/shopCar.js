$(() => {
    let user_id = localStorage.getItem("user_id") || "";
    if (!user_id) {
        alert("请跳转到首页登录");
    } else {
        $.ajax({
            url: "../php/shopCar.php",
            data: { user_id },
            dataType: "json"
        }).done(data => {
            let htmlStr = data.map((itme, index) => {
                return `
                <div class="shopCar-center">
                <div class="goods-from clear_fix float_left">
                    
                    <input data="ischeck" type="checkbox" id="check${index}" class="check">
                    <a href="" class="">
                        <img class="float_left" src=${itme.src} alt="">
                    </a>
                    <span class="piece-money float_right">￥${(parseInt((itme.price).replace(/,/g, '').slice(1, 10)))}</span>
                    <div class="goods-num float_right">
                        <button class="jian">-</button>
                        <input type="text" class="piece_num" value=${parseInt(itme.num)}>
                        <button class="jia">+</button>
                    </div>
                    <span class="num-money float_right">￥${parseInt(itme.num) * (parseInt((itme.price).replace(/,/g, '').slice(1, 10)))}</span>
                    <button data="shan" class="shan float_right float_right">×</button>
                </div>
                </div>
                `;

            })
            $(".goods-box").append(htmlStr);
        })
    }
    $(".shopCar-goods").on("click", function (e) {
        //每一个的点击事件
        if ($(e.target).attr("data") == "ischeck") {
            let xiaoji = $(e.target).parent().parent().parent().find(".num-money");
            let checks = $(e.target).parent().parent().parent().find(".check");
            let moneys = $(e.target).parent().parent().parent().next().find(".total-money")
            //判断单个checkbox
            for (let i = 0; i < checks.length; i++) {
                if (!checks[i].checked) {
                    $(e.target).parent().parent().parent().next().find(".check").prop("checked", false);
                    break
                }
                $(e.target).parent().parent().parent().next().find(".check").prop("checked", true);
            }

            //总数量
            let nums = $(e.target).parent().parent().parent().find(".piece_num");
            let t = 0;
            let o = 0;
            for (let i = 0; i < nums.length; i++) {
                if (checks[i].checked) {
                    t += parseInt($(nums[i]).val())
                    // 总价格等于小计和
                    o += parseInt($(xiaoji[i]).text().slice(1, 6))
                }
            }
            //选中的总数量计算 
            $(e.target).parent().parent().parent().next().find(".total-num span").text(t)
            // 总价格
            moneys.text(o)

        }
        //数量减
        if ($(e.target).attr("class") == "jian") {
            if (($(e.target).next().val()) <= 1) {
                return
            }
            //数量
            let num = parseInt($(e.target).next().val());
            num--;
            $(e.target).next().val(num);
            //单价
            let danjia = (parseInt($(e.target).parent().prev().text().slice(1, 10)))
            //单个商品的数量单价计算
            $(e.target).parent().next().text("￥" + (num * danjia))
            $(e.target).parent().parent().find(".check")[0].checked = false
        }
        //数量加
        if ($(e.target).attr("class") == "jia") {
            if (($(e.target).next().val()) == 999) {
                return
            }
            let num = parseInt($(e.target).prev().val());
            num++;
            $(e.target).prev().val(num);
            //单价
            let danjia = (parseInt($(e.target).parent().prev().text().slice(1, 10)))
            //单个商品的数量单价计算
            $(e.target).parent().next().text("￥" + (num * danjia))
            $(e.target).parent().parent().find(".check")[0].checked = false
        }
        //删除
        if ($(e.target).attr("data") == "shan") {
            let moneys = $(e.target).parent().parent().parent().next().find(".total-money");
            let xiaoji = $(e.target).prev().text().slice(1,10);
            if(parseInt((moneys).text())!=0){
                moneys.text(parseInt((moneys).text()) - parseInt(xiaoji));
            }
            $(e.target).parent().parent().remove();
        }
        //全选
        if ($(e.target).attr("data") == "check-footer") {
            $(e.target).parent().prev().find(".check").prop({ checked: $(e.target)[0].checked })
            // 数量与金额
            let xiaoji = $(e.target).parent().prev().find(".num-money");
            let checks = $(e.target).parent().prev().find(".check");
            let nums = $(e.target).parent().prev().find(".piece_num");
            let moneys = $(e.target).next().find(".total-money")
            // console.log(xiaoji)
            // console.log(checks)
            // console.log(nums)
            // console.log(moneys)
            let t = 0;
            let o = 0;
            for (let i = 0; i < xiaoji.length; i++) {
                if (checks[i].checked) {
                    console.log()
                    t += parseInt($(nums[i]).val())
                    // 总价格等于小计和
                    o += parseInt($(xiaoji[i]).text().slice(1, 6))
                }
            }
            //选中的总数量计算 
            $(e.target).next().find(".total-num span").text(t)
            // 总价格
            moneys.text(o)
        }
    })
    console.log($("top-left"))
    $(".top-left i").click(function () {
        location.href="./index.html"
    })
})