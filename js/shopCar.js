let user_id = localStorage.getItem("user_id") || "";
if(!user_id){
    alert("请跳转到首页登录");
}else{
    $.ajax({
        url: "../php/shopCar.php",
        data: { user_id },
        dataType: "json"
    }).done(data => {
        let htmlStr = data.map((itme,index) =>{
            for(let i=1;i<999;i++){
                return `
                <div class="shopCar-center">
                <div class="goods-from clear_fix float_left">
                    <label for="check${i}"  class="label"></label>
                    <input type="checkbox" id="check${i}" class="check">
                    <a href="" class="clear_fix">
                        <img class="float_left" src=${itme.src} alt="">
                    </a>
                    <span class="piece-money float_right">￥${itme.price}</span>
                    <div class="goods-num float_right">
                        <button class="jian">-</button>
                        <input type="text" class="piece_num" value=${itme.num}>
                        <button class="jia">+</button>
                    </div>
                    <span class="num-money float_right">￥${itme.num * itme.price}</span>
                    <button class="shan float_right float_right">×</button>
                </div>
                `;
            }
        })
        $(".type-row").after(htmlStr);

        
    })
}