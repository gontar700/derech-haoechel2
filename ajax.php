<?php
/**
 * Created by PhpStorm.
 * User: danielgontar
 * Date: 5/5/17
 * Time: 11:27 PM
 */
header('Content-Type: text/html');

$name = $_GET['name'];
$mail = $_GET['email'];
$mobile = $_GET['mobile'];

$json = array('mail' => $mail);

echo json_encode($json);

?>