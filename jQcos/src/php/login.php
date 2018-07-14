<?php
	include "public.php";
	
	$username=$_REQUEST["username"];
	$password=$_REQUEST["password"];
	
	$sql="select * from `cosmetics` where username='$username'";
	
	$row=mysqli_query($conn,$sql);
	
	$n=mysqli_num_rows($row);
	
	if(!$n){
		echo json_encode(array("status"=>0,"info"=>"用户名错误"));
	}else{
		$arr=mysqli_fetch_assoc($row);
		
		if($arr["password"]==$password){
			echo json_encode(array("status"=>1,"info"=>"登陆成功"));
		}else{
			echo json_encode(array("status"=>2,"info"=>"密码错误"));
		}
	}
?>