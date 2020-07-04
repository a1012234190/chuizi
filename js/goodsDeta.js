$(()=>{

    let goodsId = location.search.split("=")[1];
    // console.log(goods_url);
    $.get("../php/GoodsDeta.php", "goodsId=" + goodsId, function (data) {
        console.log(data);
        console.log("123")
        let htmlStr = `
        <div id="goodsdeta-wrap" data-id=${data.good_Id}>
        <div class="goodsdeta-left float_left">
            <img src="${data.src}" alt="">
        </div>
        <div class="goodsdeta-right float_left">
            <!-- 1 -->
            <div>
                <h2>${data.name}</h2>
                <p>${data.title}</p>
                <h4>${data.price}</h4>
            </div>
            <!-- 2 -->
            <div>
                <p>促销活动</p>
                <a>大促</a>
                <em>精选配件 限时大促</em>
            </div>
            <!-- 3 -->
            <div>
                <p>颜色选择</p>
                <a href="#">黑色</a>
            </div>
            <!-- 4 -->
            <div>
                <p>货存</p>
                <span>100</span>
            </div>
            <!-- 5 -->
            <div>
                <p>服务说明</p>
                <span>* 满99元包邮</span>
            </div>
            <button class="btn-cat">加入购物车</button>
        </div>
    </div>
        `;
        $("#goodsdeta").html(htmlStr);
    }, "json")

    $.getJSON("../json/index-goods1.json",(data)=>{
        let html = data.map(itme=>{
            return `
            <div class="goods-list-Bottom">
            <div class="goods-active">
                <img src=${itme.src} alt="">
                <h3>${itme.name}</h3>
                <p>
                   ${itme.title}
                </p>
                <h4>${itme.price}</h4>
                <em>${itme.orignal_price}</em>
                <span>直降</span>
            </div>
        </div>
            `
        })
        $(".goods-footer").html(html);
    })


    $("#goodsdeta").on("click",".btn-cat",function(){
        console.log("1");
        let user_id = localStorage.getItem("user_id") || "";
        let user_name= localStorage.getItem("user_name") || "";
        console.log(user_id,user_name);
        if(user_id && user_name){
            $.ajax({
                url: "../php/addCart.php",
                data: { user_id,goodsId}
            }).done(data => {
                console.log("返回值:", data);
                location.href = "./shopCar.html";
            })
        }else{
            location.href="./login.html";
        }
    })
})