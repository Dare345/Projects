<?php
	$page = "Home";
	$path='./';
	require $path.'assets/inc/header.php';
	require_once $path.'assets/inc/nav.php';

	require $path.'../../../db demo/dbConn.php';

	$sql = "SELECT content FROM modularSite2198 where name='".$page."'";

	$result = $mysqli->query($sql);

	if($result->num_rows >0){
		while($row = $result->FETCH_ASSOC()){
			echo $row['content'];
		}
	}else{
		echo '0 results, you did something wrong!';
	}

	include($path.'assets/inc/footer.php');
?>
				<h1>Home page stuff...</h1> 
				<div>(eventually, each page will be some includes and a db call only!)</div>