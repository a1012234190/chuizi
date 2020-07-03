$(()=>{
    $("#loginBtn").click(function(){
        let username = $.trim($("#username-ID").val());
        let password = $.trim($("#password-ID").val());
        let pass = md5(password).slice(0,15)

        if(username.length == 0){
            alert("用户名不能为空");
            return
        }
        if(password.length == 0){
            alert("密码不能为空");
            return
        }
        console.log("1")
        $.ajax({
            type:"post",
            url:"../php/login2.php",
            dataType:"json",
            // data:`username=${username}&password=${md5(password).slice(0,15)}`
            data:{username, pass}
        }).done(data=>{
            console.log(data);
            if(data.status == "success"){
                localStorage.setItem("user_id",data.data.userId);
                localStorage.setItem("user_name",data.data.username);

                location.href = "./goodsList.html";
            }else{
                alert(data.data.msg);
                console.log("diao")
            }
        })
    })
})
