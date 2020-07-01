<?php
$db = mysqli_connect("localhost", "root","","chuizi");
if(!$db)
{
    die('连接错误: ' . mysqli_error($db));
}
?>