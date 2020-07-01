$(()=>{
    $("#loginBtn").click(function(){
        let username = $.trim($("#username-ID").val());
        let password = $.trim($("#password-ID").val());

        if(username.length == 0){
            alert("用户名不能为空");
            return
        }
        if(password.length == 0){
            alert("密码不能为空");
            return
        }

        $.ajax({
            type:"post",
            url:"../php/login.php",
            dataType:"json",
            data:`username=${username}&password=${md5(password).slice(0,15)}`
        }).done(data=>{
            if(data.status == "success"){
                alert(data.msg);
            }else{
                alert(data.msg);
            }
        })
    })
})