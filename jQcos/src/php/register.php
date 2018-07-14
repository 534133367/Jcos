<?php
	include "public.php";
	
	$username=$_GET["username"];
	$password=$_GET["_password"];
	
	$sql = "INSERT INTO `JQcos`(`username`, `password`) VALUES ('$username','$password')";

	$rows = mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array("status"=>1,"info"=>"成功"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"失败"));
	}
?>