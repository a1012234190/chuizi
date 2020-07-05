$(() => {


    $.ajax({
        url: "../php/goodsList.php",
        dataType: "json",
    }).done(data => {
        console.log(data)
        console.log(JSON.stringify(data))
        let html = data.map(itme => {
            return `
                <div class="goods-list-Bottom" data-id=${itme.good_id}>
                <a href="./goodsDeta.html?goodsid=${itme.good_id}">
                        <div class="goods-active">
                        <img src=${itme.src} alt="">
                        <h3>${itme.name}</h3>
                        <p>
                            ${itme.title}
                        </p>
                        <h4>￥${itme.price}</h4>
                        <em>￥${itme.orignal_price}</em>
                        <span>直降</span>
                        </div> 
                </a>
                </div>
                    `;
        }).join("");
        $(".goodsList-box").html(html);
    })
})