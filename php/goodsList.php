<?php
include_once "./connectDB.php";
$sql = "SELECT * FROM goods";
mysqli_query($db,"SET NAMES utf8");
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);


?>