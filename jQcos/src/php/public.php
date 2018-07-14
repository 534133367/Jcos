<?php
	header("content-type:text/html;charset=utf8");
	
	$servername="localhost";
	$db_username="root";
	$db_password="root";
	$db_name="cc";
	
	$conn=new mysqli($servername,$db_username,$db_password,$db_name);
	
	if($conn->connect_error){
		die("连接失败".$conn->connect_error);
	}
	$conn->query("set names utf8");
	
	
?>