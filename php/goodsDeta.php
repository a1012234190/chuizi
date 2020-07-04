<?php
    header("Content-Type:text/html;charset=utf-8");
   
    $db = mysqli_connect("localhost", "root","","chuizi");
    $goodsId = $_REQUEST['goodsId'];
	// if(!mysql_select_db($db)){
	// 	die("数据库选择失败".mysql_error());
    // }
    $sql = "SELECT * FROM goods WHERE good_id='$goodsId'";
    mysqli_query($db,"SET NAMES utf8");
    $result = mysqli_query($db,$sql);
    // echo json_encode($result,true);
    $res = mysqli_fetch_all($result,MYSQLI_ASSOC);
    // if(count($res) == 0){
	// 	die("获取数据失败".mysql_error());
    // }
    $res = $res[0];
    echo json_encode($res,true);
?>