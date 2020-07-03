$(() => {
    let imgCode;
    /*不传值，统一走默认值*/
    let captcha = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 2, //线条数量
        // dotR: 200, //点的半径
        // dotNum: 1000, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 40, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: '0123456789', //验证码内容
        length: 4 //验证码长度
    });

    captcha.draw(document.querySelector('#captcha'), r => {
        console.log('验证码', r);
        imgCode = r;

        /* 自动触发标签的事件 */
        $("#imageCode").trigger("blur");
    });


    let options = {
        "usernameID": {
            reg: `/^[a-zA-Z]{2,6}$/.test(val)`,
            msg: "用户名不规范"
        },
        "phoneID": {
            reg: `/^1[3-9]\\d{9}$/.test(val)`,
            msg: "手机号码不规范"
        },
        "passwordA": {
            reg: `/^[a-zA-Z0-9]{3,6}$/.test(val)`,
            msg: "密码不规范"
        },
        "passwordB": {
            reg: `$.trim($("#passwordA").val())==val`,
            msg: "两次输入密码不一致"
        },
        "imageCode": {
            reg: "val == imgCode",
            msg: "图形验证码不正确！！！"
        }
    }

    $(".common-from input").blur(function () {
        let option_id = this.id;
        let val = $.trim($(this).val());
        // console.log(options[option_id]);
        if (eval(options[option_id].reg)) {
            $(this).next().text("");
            $(this).parents(".form-item").removeClass("form-group-error");
            $(this).siblings().eq(0).removeClass("form-group-error")
        } else {
            $(this).next().text(options[option_id].msg);
            $(this).parents(".form-item").addClass("form-group-error");
            $(this).siblings().eq(0).addClass("form-group-error")
        }
    })

    $("#megisterBtn").click(function () {
        $("#usernameID","#phoneID","#passwordA","#passwordB","#imageCode").trigger("blur");

        if($(".form-group-error").length != 0){
            return;
        }
        let data = {
            username:$.trim($("#usernameID").val()),
            phone:$.trim($("#phoneID").val()),
            password:md5($.trim($("#passwordA").val())).slice(0,15)
        }
        $.ajax({
            url:"../php/reg.php",
            type:"post",
            data,
            dataType:"json",
        }).done(data =>{
            console.log(data);
            if(data.status == "ok"){
                alert("注册成功!")
            }else{
                alert(data.msg);
            }
        })
    })

})