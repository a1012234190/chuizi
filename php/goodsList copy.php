<?php
include_once "./connectDB.php";
$sql = "SELECT * FROM goods";
mysqli_query($db,"SET NAMES utf8");
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);


//接受数据
// $typeId=$_GET["typeId"];
//连接数据库
// include_once "./connectDB.php";
//判断数据库的表
// if(!mysql_select_db("goods",$conn)){
    // die("数据库选择失败".mysql_error());
// }

?>