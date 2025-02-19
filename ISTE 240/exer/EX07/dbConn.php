<?php
    //mysqli(server,username, pass(that you logged into phpMyAdmin with), db)
    $mysqli = new mysqli('localhost','dy4385','Executed9#baedeker','dy4385');
    //$conn is holding a object! $conn->method(), $conn->property
    //let's do a test
    if(mysqli_connect_errno() ){
        echo 'connection failed: '. mysqli_connect_error();
        exit();
    }else{
        //echo 'connection good';
    }